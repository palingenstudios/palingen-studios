import React, { useRef, useEffect } from 'react';
import { NODES, LINKS, CosmicNode, CosmicLink } from '../data/cosmicNodes';

// ── Precomputed helpers ───────────────────────────────────────────────────────
// Which node IDs have depth-1 children?
const PARENT_IDS = new Set(NODES.filter(n => n.parentId).map(n => n.parentId as string));

// ── Internal physics node ────────────────────────────────────────────────────
interface PNode extends CosmicNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// ── Category visual styles ───────────────────────────────────────────────────
interface CatStyle { color: string; highlight: string; dark: string; glow: string }
const CAT: Record<string, CatStyle> = {
  celestial: { color: '#c9a227', highlight: '#ffd96a', dark: '#6a4e00', glow: 'rgba(201,162,39,0.42)' },
  creature:  { color: '#bf3b30', highlight: '#e05040', dark: '#6c1a14', glow: 'rgba(191,59,48,0.36)'  },
  place:     { color: '#22a882', highlight: '#48d9b5', dark: '#0a5240', glow: 'rgba(34,168,130,0.36)' },
  concept:   { color: '#7a56a8', highlight: '#b07fd9', dark: '#3d2060', glow: 'rgba(122,86,168,0.36)' },
  palingen:  { color: '#d8c890', highlight: '#ffffff',  dark: '#857540', glow: 'rgba(216,200,144,0.50)' },
};

// ── Star / shooting-star types ───────────────────────────────────────────────
interface Star         { x: number; y: number; r: number; base: number; phase: number; speed: number }
interface ShootingStar { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }

// ── Visibility helpers ───────────────────────────────────────────────────────
function getVisible(all: PNode[], expanded: Set<string>): PNode[] {
  return all.filter(n => !n.depth || !n.parentId || expanded.has(n.parentId));
}
function activeLinks(links: CosmicLink[], ids: Set<string>): CosmicLink[] {
  return links.filter(l => ids.has(l.source) && ids.has(l.target));
}

// ── Hit detection ────────────────────────────────────────────────────────────
function hitTest(nodes: PNode[], mx: number, my: number): PNode | null {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n = nodes[i];
    const dx = mx - n.x, dy = my - n.y;
    if (dx * dx + dy * dy <= (n.radius + 10) ** 2) return n;
  }
  return null;
}

// ── Physics tick ─────────────────────────────────────────────────────────────
function physTick(
  nodes: PNode[],
  links: CosmicLink[],
  W: number, H: number,
  dragId: string | null,
  dragXY: { x: number; y: number } | null,
) {
  const cx = W / 2, cy = H / 2;
  const idMap = new Map<string, PNode>(nodes.map(n => [n.id, n]));

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d2 = dx * dx + dy * dy || 0.001;
      const d  = Math.sqrt(d2);
      if (d < 400) {
        const f = Math.min(900 / d2, 10);
        const nx = dx / d, ny = dy / d;
        a.vx -= nx * f; a.vy -= ny * f;
        b.vx += nx * f; b.vy += ny * f;
      }
    }
  }

  for (const lnk of links) {
    const s = idMap.get(lnk.source), t = idMap.get(lnk.target);
    if (!s || !t) continue;
    const dx = t.x - s.x, dy = t.y - s.y;
    const d  = Math.sqrt(dx * dx + dy * dy) || 0.001;
    // Child nodes pull tighter to their parent
    const childLink = (s.depth === 1 || t.depth === 1);
    const ideal   = childLink ? (s.radius + t.radius) * 2 + 80 : (s.radius + t.radius) * 2 + 155;
    const stretch = (d - ideal) * (childLink ? 0.028 : 0.016);
    const nx = dx / d, ny = dy / d;
    s.vx += nx * stretch; s.vy += ny * stretch;
    t.vx -= nx * stretch; t.vy -= ny * stretch;
  }

  for (const n of nodes) {
    n.vx += (cx - n.x) * 0.0022;
    n.vy += (cy - n.y) * 0.0022;
  }

  if (dragId && dragXY) {
    const dn = idMap.get(dragId);
    if (dn) { dn.x = dragXY.x; dn.y = dragXY.y; dn.vx = 0; dn.vy = 0; }
  }

  for (const n of nodes) {
    if (n.id === dragId) continue;
    n.vx *= 0.82; n.vy *= 0.82;
    n.x  += n.vx; n.y  += n.vy;
    const pad = n.radius + 68;
    if (n.x < pad)     { n.x = pad;     n.vx =  Math.abs(n.vx) * 0.3; }
    if (n.x > W - pad) { n.x = W - pad; n.vx = -Math.abs(n.vx) * 0.3; }
    if (n.y < pad)     { n.y = pad;     n.vy =  Math.abs(n.vy) * 0.3; }
    if (n.y > H - pad) { n.y = H - pad; n.vy = -Math.abs(n.vy) * 0.3; }
  }
}

// ── Component ────────────────────────────────────────────────────────────────
interface CosmicMapProps {
  onNodeClick: (node: CosmicNode) => void;
}

const CosmicMap: React.FC<CosmicMapProps> = ({ onNodeClick }) => {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const rafRef         = useRef<number>(0);
  const pnodesRef      = useRef<PNode[]>([]);
  const expandedRef    = useRef<Set<string>>(new Set());
  const positionedRef  = useRef<Set<string>>(new Set());
  const hoveredRef     = useRef<string | null>(null);
  const dragRef        = useRef<{ id: string; tx: number; ty: number } | null>(null);
  const starsRef       = useRef<Star[]>([]);
  const shootersRef    = useRef<ShootingStar[]>([]);
  const shootCdRef     = useRef<number>(0);
  const startTimeRef   = useRef<number>(0);
  const isDraggingRef  = useRef<boolean>(false);
  const clickTargetRef = useRef<string | null>(null);

  // ── Init ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const W = canvas.width, H = canvas.height;

    starsRef.current = Array.from({ length: 200 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() < 0.12 ? 1.6 : Math.random() < 0.4 ? 1.0 : 0.5,
      base: Math.random() * 0.65 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.55 + 0.15,
    }));

    // Build id→index map for parent lookup
    const idxMap = new Map(NODES.map((n, i) => [n.id, i]));

    pnodesRef.current = NODES.map((n, i) => {
      if (n.id === 'palingen') return { ...n, x: W / 2, y: H / 2, vx: 0, vy: 0 };
      if (n.depth === 1 && n.parentId) {
        // Position child nodes initially near their parent
        const pi = idxMap.get(n.parentId) ?? 0;
        const parentAngle = (pi / NODES.length) * Math.PI * 2;
        const pr = 170 + 90 * 0.5;
        const px = W / 2 + Math.cos(parentAngle) * pr;
        const py = H / 2 + Math.sin(parentAngle) * pr;
        const offset = 30;
        return {
          ...n,
          x: px + (Math.random() - 0.5) * offset,
          y: py + (Math.random() - 0.5) * offset,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
        };
      }
      const angle = (i / NODES.length) * Math.PI * 2;
      const r = 170 + Math.random() * 90;
      return {
        ...n,
        x: W / 2 + Math.cos(angle) * r + (Math.random() - 0.5) * 50,
        y: H / 2 + Math.sin(angle) * r + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      };
    });

    startTimeRef.current = performance.now();
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ── Animation loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const loop = (ts: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const W = canvas.width, H = canvas.height;
      const allNodes   = pnodesRef.current;
      const expanded   = expandedRef.current;
      const visible    = getVisible(allNodes, expanded);
      const visIds     = new Set(visible.map(n => n.id));
      const curLinks   = activeLinks(LINKS, visIds);

      physTick(visible, curLinks, W, H,
        dragRef.current?.id ?? null,
        dragRef.current ? { x: dragRef.current.tx, y: dragRef.current.ty } : null,
      );

      // ── Draw ─────────────────────────────────────────────────────
      const elapsed = ts - startTimeRef.current;
      const intro   = Math.min(1, elapsed / 2400);

      ctx.fillStyle = '#03040e';
      ctx.fillRect(0, 0, W, H);
      const nb = ctx.createRadialGradient(W * 0.38, H * 0.32, 0, W * 0.38, H * 0.32, W * 0.65);
      nb.addColorStop(0, 'rgba(18,12,52,0.75)');
      nb.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = nb;
      ctx.fillRect(0, 0, W, H);

      // Stars
      for (const star of starsRef.current) {
        const tw = 0.45 + 0.55 * Math.sin(ts * 0.001 * star.speed + star.phase);
        ctx.globalAlpha = star.base * tw;
        ctx.fillStyle   = '#eff0ff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Shooting stars
      if (--shootCdRef.current <= 0 && Math.random() < 0.004) {
        shootersRef.current.push({
          x: Math.random() * W, y: 0,
          vx: 3 + Math.random() * 5, vy: 2 + Math.random() * 3,
          life: 0, maxLife: 40 + Math.floor(Math.random() * 35),
        });
        shootCdRef.current = 280 + Math.floor(Math.random() * 500);
      }
      shootersRef.current = shootersRef.current.filter(s => s.life < s.maxLife);
      for (const s of shootersRef.current) {
        const t = s.life / s.maxLife, tail = 55 + s.vx * 7;
        ctx.save();
        ctx.globalAlpha = (1 - t) * 0.75;
        const sg = ctx.createLinearGradient(s.x - s.vx * tail * 0.28, s.y - s.vy * tail * 0.28, s.x, s.y);
        sg.addColorStop(0, 'rgba(255,255,255,0)');
        sg.addColorStop(1, 'rgba(255,255,255,0.95)');
        ctx.strokeStyle = sg;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * tail * 0.28, s.y - s.vy * tail * 0.28);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();
        s.x += s.vx; s.y += s.vy; s.life++;
      }

      const nodeMap = new Map<string, PNode>(visible.map(n => [n.id, n]));
      const hovered = hoveredRef.current;

      // Links
      for (const lnk of curLinks) {
        const s = nodeMap.get(lnk.source), t = nodeMap.get(lnk.target);
        if (!s || !t) continue;
        const isChild = s.depth === 1 || t.depth === 1;
        const hot = hovered === s.id || hovered === t.id;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.globalAlpha = intro * (hot ? 0.70 : isChild ? 0.28 : 0.17);
        ctx.strokeStyle  = hot ? '#f5c842' : isChild ? '#c4a84a' : '#9a8456';
        ctx.lineWidth    = hot ? 1.8 : isChild ? 1.1 : 0.75;
        ctx.setLineDash(isChild ? [4, 4] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.globalAlpha = 1;

      // Nodes
      visible.forEach((n, i) => {
        const ni     = Math.min(1, Math.max(0, (intro - i * 0.018) / 0.18));
        if (ni <= 0) return;

        const style  = CAT[n.category] ?? CAT.concept;
        const isHov  = hovered === n.id;
        const isChild = n.depth === 1;
        const hasKids = PARENT_IDS.has(n.id);
        const isExpanded = expanded.has(n.id);
        const pulse  = 1 + 0.042 * Math.sin(ts * 0.0017 + i * 0.72);
        const r      = n.radius * pulse * (isHov ? 1.18 : 1) * (isChild ? 0.85 : 1) * (0.25 + 0.75 * ni);

        ctx.globalAlpha = ni * (isChild ? 0.88 : 1);

        // Glow halo
        const gr = r * (isHov ? 4.0 : 2.7);
        const gg = ctx.createRadialGradient(n.x, n.y, r * 0.35, n.x, n.y, gr);
        gg.addColorStop(0, style.glow);
        gg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.arc(n.x, n.y, gr, 0, Math.PI * 2);
        ctx.fill();

        // Expand indicator ring — animated orbit for parent nodes with hidden children
        if (hasKids && !isExpanded) {
          const ringR = n.radius * 1.55 + 3;
          const ringA = (ts * 0.0008) % (Math.PI * 2);
          ctx.save();
          ctx.globalAlpha = 0.45 + 0.25 * Math.sin(ts * 0.002);
          ctx.strokeStyle = style.highlight;
          ctx.lineWidth   = 1.2;
          ctx.setLineDash([5, 7]);
          ctx.lineDashOffset = -ts * 0.03;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          // "+" symbol
          ctx.globalAlpha = 0.7;
          ctx.fillStyle   = style.highlight;
          ctx.font        = 'bold 9px Georgia,serif';
          ctx.textAlign   = 'center';
          ctx.fillText('+', n.x + ringR * Math.cos(ringA), n.y + ringR * Math.sin(ringA));
          ctx.restore();
        }

        // Expanded indicator — solid ring
        if (isExpanded) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          ctx.strokeStyle = style.highlight;
          ctx.lineWidth   = 1.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 1.6, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // Node body
        ctx.globalAlpha = ni * (isChild ? 0.88 : 1);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        const bg = ctx.createRadialGradient(n.x - r * 0.38, n.y - r * 0.38, r * 0.05, n.x, n.y, r);
        bg.addColorStop(0,    style.highlight);
        bg.addColorStop(0.55, style.color);
        bg.addColorStop(1,    style.dark);
        ctx.fillStyle   = bg;
        ctx.fill();
        ctx.strokeStyle = isHov ? style.color : isChild ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.22)';
        ctx.lineWidth   = isHov ? 2.5 : 1;
        ctx.stroke();

        // Label
        const fontSize = n.id === 'palingen' ? 12 : n.radius > 17 ? 11 : isChild ? 9 : 10;
        ctx.font      = `${isHov ? 'bold ' : ''}${fontSize}px 'Palatino Linotype','Book Antiqua',Georgia,serif`;
        ctx.textAlign = 'center';
        const ly  = n.y + r + 15;

        if (isHov) {
          const lw = ctx.measureText(n.label).width;
          ctx.fillStyle = 'rgba(3,4,14,0.78)';
          ctx.fillRect(n.x - lw / 2 - 5, ly - 13, lw + 10, 17);
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = isChild ? 'rgba(200,185,130,0.75)' : 'rgba(218,198,150,0.86)';
        }
        ctx.fillText(n.label, n.x, ly);
        ctx.globalAlpha = 1;
      });

      // Hint text
      if (intro < 1) {
        ctx.globalAlpha = Math.max(0, 1 - intro * 2);
        ctx.fillStyle   = 'rgba(180,160,100,0.7)';
        ctx.font        = '12px Georgia,serif';
        ctx.textAlign   = 'center';
        ctx.fillText('Mapping the unseen realm…', W / 2, H - 36);
        ctx.globalAlpha = 1;
      } else {
        const hintA = 0.35 * Math.sin(ts * 0.0004 + 1) + 0.38;
        ctx.globalAlpha = hintA;
        ctx.fillStyle   = 'rgba(160,140,90,1)';
        ctx.font        = '11px Georgia,serif';
        ctx.textAlign   = 'center';
        ctx.fillText('hover · click to reveal · click ◈ nodes to expand layers', W / 2, H - 28);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Pointer helpers ─────────────────────────────────────────────────────
  const toCanvas = (e: React.MouseEvent) => {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const getVisibleNodes = () => getVisible(pnodesRef.current, expandedRef.current);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { x, y } = toCanvas(e);
    if (dragRef.current) {
      dragRef.current.tx = x;
      dragRef.current.ty = y;
      isDraggingRef.current = true;
    } else {
      const hit = hitTest(getVisibleNodes(), x, y);
      hoveredRef.current = hit?.id ?? null;
      canvasRef.current!.style.cursor = hit ? 'pointer' : 'default';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const { x, y } = toCanvas(e);
    const hit = hitTest(getVisibleNodes(), x, y);
    if (hit) {
      dragRef.current        = { id: hit.id, tx: x, ty: y };
      isDraggingRef.current  = false;
      clickTargetRef.current = hit.id;
    }
  };

  const handleMouseUp = () => {
    const wasDrag = isDraggingRef.current;
    const target  = clickTargetRef.current;
    dragRef.current        = null;
    isDraggingRef.current  = false;
    clickTargetRef.current = null;

    if (!wasDrag && target) {
      // Toggle expand/collapse if this node has children
      if (PARENT_IDS.has(target)) {
        const exp = expandedRef.current;
        if (exp.has(target)) {
          exp.delete(target);
        } else {
          exp.add(target);
          // Snap child nodes to parent position so they burst outward cleanly
          const parent = pnodesRef.current.find(n => n.id === target);
          if (parent) {
            pnodesRef.current.forEach(n => {
              if (n.parentId === target && !positionedRef.current.has(n.id)) {
                n.x = parent.x + (Math.random() - 0.5) * 20;
                n.y = parent.y + (Math.random() - 0.5) * 20;
                n.vx = (Math.random() - 0.5) * 4;
                n.vy = (Math.random() - 0.5) * 4;
                positionedRef.current.add(n.id);
              }
            });
          }
        }
      }

      const node = pnodesRef.current.find(n => n.id === target);
      if (node) onNodeClick(node);
    }
  };

  const handleMouseLeave = () => {
    hoveredRef.current = null;
    dragRef.current    = null;
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block' }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default CosmicMap;

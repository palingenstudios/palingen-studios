import React, { useRef, useEffect, useCallback } from 'react';
import { NODES, LINKS, CosmicNode } from '../data/cosmicNodes';

// ── Internal physics node ────────────────────────────────────────────────────
interface PNode extends CosmicNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// ── Category visual styles ───────────────────────────────────────────────────
interface CatStyle {
  color: string;
  highlight: string;
  dark: string;
  glow: string;
}
const CAT: Record<string, CatStyle> = {
  celestial: { color: '#c9a227', highlight: '#ffd96a', dark: '#6a4e00', glow: 'rgba(201,162,39,0.42)' },
  creature:  { color: '#bf3b30', highlight: '#e05040', dark: '#6c1a14', glow: 'rgba(191,59,48,0.36)'  },
  place:     { color: '#22a882', highlight: '#48d9b5', dark: '#0a5240', glow: 'rgba(34,168,130,0.36)' },
  concept:   { color: '#7a56a8', highlight: '#b07fd9', dark: '#3d2060', glow: 'rgba(122,86,168,0.36)' },
  palingen:  { color: '#d8c890', highlight: '#ffffff',  dark: '#857540', glow: 'rgba(216,200,144,0.50)' },
};

// ── Star / shooting-star types ───────────────────────────────────────────────
interface Star          { x: number; y: number; r: number; base: number; phase: number; speed: number }
interface ShootingStar  { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }

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
  W: number,
  H: number,
  dragId: string | null,
  dragXY: { x: number; y: number } | null,
) {
  const cx = W / 2, cy = H / 2;
  const idMap = new Map<string, PNode>(nodes.map(n => [n.id, n]));

  // Pairwise repulsion
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d2 = dx * dx + dy * dy || 0.001;
      const d  = Math.sqrt(d2);
      if (d < 400) {
        const f  = Math.min(900 / d2, 10);
        const nx = dx / d, ny = dy / d;
        a.vx -= nx * f; a.vy -= ny * f;
        b.vx += nx * f; b.vy += ny * f;
      }
    }
  }

  // Link springs
  for (const lnk of LINKS) {
    const s = idMap.get(lnk.source), t = idMap.get(lnk.target);
    if (!s || !t) continue;
    const dx = t.x - s.x, dy = t.y - s.y;
    const d  = Math.sqrt(dx * dx + dy * dy) || 0.001;
    const ideal   = (s.radius + t.radius) * 2 + 155;
    const stretch = (d - ideal) * 0.016;
    const nx = dx / d, ny = dy / d;
    s.vx += nx * stretch; s.vy += ny * stretch;
    t.vx -= nx * stretch; t.vy -= ny * stretch;
  }

  // Weak centre gravity
  for (const n of nodes) {
    n.vx += (cx - n.x) * 0.0022;
    n.vy += (cy - n.y) * 0.0022;
  }

  // Apply dragged-node constraint
  if (dragId && dragXY) {
    const dn = idMap.get(dragId);
    if (dn) { dn.x = dragXY.x; dn.y = dragXY.y; dn.vx = 0; dn.vy = 0; }
  }

  // Integrate + dampen + soft boundary
  for (const n of nodes) {
    if (n.id === dragId) continue;
    n.vx *= 0.82; n.vy *= 0.82;
    n.x  += n.vx;  n.y  += n.vy;
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
  const canvasRef       = useRef<HTMLCanvasElement>(null);
  const rafRef          = useRef<number>(0);
  const pnodesRef       = useRef<PNode[]>([]);
  const hoveredRef      = useRef<string | null>(null);
  const dragRef         = useRef<{ id: string; tx: number; ty: number } | null>(null);
  const starsRef        = useRef<Star[]>([]);
  const shootersRef     = useRef<ShootingStar[]>([]);
  const shootCdRef      = useRef<number>(0);
  const startTimeRef    = useRef<number>(0);
  const isDraggingRef   = useRef<boolean>(false);
  const clickTargetRef  = useRef<string | null>(null);

  // ── Init ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = canvas.width, H = canvas.height;

    starsRef.current = Array.from({ length: 200 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() < 0.12 ? 1.6 : Math.random() < 0.4 ? 1.0 : 0.5,
      base:  Math.random() * 0.65 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.55 + 0.15,
    }));

    pnodesRef.current = NODES.map((n, i) => {
      if (n.id === 'palingen') {
        return { ...n, x: W / 2, y: H / 2, vx: 0, vy: 0 };
      }
      const angle = (i / NODES.length) * Math.PI * 2;
      const r     = 170 + Math.random() * 90;
      return {
        ...n,
        x:  W / 2 + Math.cos(angle) * r + (Math.random() - 0.5) * 50,
        y:  H / 2 + Math.sin(angle) * r + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      };
    });

    startTimeRef.current = performance.now();
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ── Draw ────────────────────────────────────────────────────────────
  const drawFrame = useCallback((ts: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    const nodes = pnodesRef.current;
    if (!nodes.length) return;

    const elapsed = ts - startTimeRef.current;
    const intro   = Math.min(1, elapsed / 2400);

    // ── Background ──────────────────────────────────────────────────
    ctx.fillStyle = '#03040e';
    ctx.fillRect(0, 0, W, H);

    const nb = ctx.createRadialGradient(W * 0.38, H * 0.32, 0, W * 0.38, H * 0.32, W * 0.65);
    nb.addColorStop(0, 'rgba(18, 12, 52, 0.75)');
    nb.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = nb;
    ctx.fillRect(0, 0, W, H);

    // ── Stars ───────────────────────────────────────────────────────
    for (const star of starsRef.current) {
      const tw = 0.45 + 0.55 * Math.sin(ts * 0.001 * star.speed + star.phase);
      ctx.globalAlpha = star.base * tw;
      ctx.fillStyle   = '#eff0ff';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ── Shooting stars ──────────────────────────────────────────────
    if (--shootCdRef.current <= 0 && Math.random() < 0.004) {
      shootersRef.current.push({
        x: Math.random() * W,  y: 0,
        vx: 3 + Math.random() * 5,
        vy: 2 + Math.random() * 3,
        life: 0,
        maxLife: 40 + Math.floor(Math.random() * 35),
      });
      shootCdRef.current = 280 + Math.floor(Math.random() * 500);
    }
    shootersRef.current = shootersRef.current.filter(s => s.life < s.maxLife);
    for (const s of shootersRef.current) {
      const t    = s.life / s.maxLife;
      const tail = 55 + s.vx * 7;
      ctx.save();
      ctx.globalAlpha = (1 - t) * 0.75;
      const sg = ctx.createLinearGradient(s.x - s.vx * tail * 0.28, s.y - s.vy * tail * 0.28, s.x, s.y);
      sg.addColorStop(0, 'rgba(255,255,255,0)');
      sg.addColorStop(1, 'rgba(255,255,255,0.95)');
      ctx.strokeStyle = sg;
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x - s.vx * tail * 0.28, s.y - s.vy * tail * 0.28);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();
      ctx.restore();
      s.x += s.vx; s.y += s.vy; s.life++;
    }

    // ── Build id→node map ───────────────────────────────────────────
    const nodeMap = new Map<string, PNode>(nodes.map(n => [n.id, n]));
    const hovered = hoveredRef.current;

    // ── Links ───────────────────────────────────────────────────────
    for (const lnk of LINKS) {
      const s = nodeMap.get(lnk.source), t = nodeMap.get(lnk.target);
      if (!s || !t) continue;
      const hot = hovered === s.id || hovered === t.id;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.globalAlpha = intro * (hot ? 0.60 : 0.17);
      ctx.strokeStyle  = hot ? '#f5c842' : '#9a8456';
      ctx.lineWidth    = hot ? 1.8 : 0.75;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // ── Nodes ───────────────────────────────────────────────────────
    nodes.forEach((n, i) => {
      const ni = Math.min(1, Math.max(0, (intro - i * 0.022) / 0.18));
      if (ni <= 0) return;

      const style  = CAT[n.category] ?? CAT.concept;
      const isHov  = hovered === n.id;
      const pulse  = 1 + 0.042 * Math.sin(ts * 0.0017 + i * 0.72);
      const r      = n.radius * pulse * (isHov ? 1.18 : 1) * (0.25 + 0.75 * ni);

      ctx.globalAlpha = ni;

      // Glow halo
      const gr = r * (isHov ? 4.0 : 2.7);
      const gg = ctx.createRadialGradient(n.x, n.y, r * 0.35, n.x, n.y, gr);
      gg.addColorStop(0, style.glow);
      gg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gg;
      ctx.beginPath();
      ctx.arc(n.x, n.y, gr, 0, Math.PI * 2);
      ctx.fill();

      // Node body
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      const bg = ctx.createRadialGradient(n.x - r * 0.38, n.y - r * 0.38, r * 0.05, n.x, n.y, r);
      bg.addColorStop(0,    style.highlight);
      bg.addColorStop(0.55, style.color);
      bg.addColorStop(1,    style.dark);
      ctx.fillStyle   = bg;
      ctx.fill();
      ctx.strokeStyle = isHov ? style.color : 'rgba(255,255,255,0.22)';
      ctx.lineWidth   = isHov ? 2.5 : 1;
      ctx.stroke();

      // Label
      const fontSize = n.id === 'palingen' ? 12 : n.radius > 17 ? 11 : 10;
      ctx.font        = `${isHov ? 'bold ' : ''}${fontSize}px 'Palatino Linotype','Book Antiqua',Georgia,serif`;
      ctx.textAlign   = 'center';
      const ly  = n.y + r + 17;
      const lbl = n.label;

      if (isHov) {
        const lw = ctx.measureText(lbl).width;
        ctx.fillStyle = 'rgba(3,4,14,0.78)';
        ctx.fillRect(n.x - lw / 2 - 5, ly - 13, lw + 10, 17);
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = 'rgba(218,198,150,0.86)';
      }
      ctx.fillText(lbl, n.x, ly);
      ctx.globalAlpha = 1;
    });

    // ── Hint text (fades out after intro) ───────────────────────────
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
      ctx.fillText('hover to connect · click to reveal', W / 2, H - 28);
      ctx.globalAlpha = 1;
    }
  }, []);

  // ── Animation loop ───────────────────────────────────────────────────
  useEffect(() => {
    const loop = (ts: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      physTick(
        pnodesRef.current,
        canvas.width,
        canvas.height,
        dragRef.current?.id ?? null,
        dragRef.current ? { x: dragRef.current.tx, y: dragRef.current.ty } : null,
      );
      drawFrame(ts);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawFrame]);

  // ── Pointer helpers ─────────────────────────────────────────────────
  const toCanvas = (e: React.MouseEvent) => {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { x, y } = toCanvas(e);
    if (dragRef.current) {
      dragRef.current.tx = x;
      dragRef.current.ty = y;
      isDraggingRef.current = true;
    } else {
      const hit = hitTest(pnodesRef.current, x, y);
      hoveredRef.current = hit?.id ?? null;
      canvasRef.current!.style.cursor = hit ? 'pointer' : 'default';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const { x, y } = toCanvas(e);
    const hit = hitTest(pnodesRef.current, x, y);
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

import React, { useRef, useEffect, useCallback } from 'react';

interface Petal {
  angle: number;
  length: number;
  width: number;
  color: string;
}

interface Flower {
  x: number;
  y: number;
  scale: number;
  targetScale: number;
  opacity: number;
  fadeTimer: number;
  fadeDuration: number;
  petals: Petal[];
  centerRadius: number;
  rotation: number;
  born: number;
  bloomSpeed: number;
}

const PETAL_COLORS = [
  '#ff9eb5',
  '#ffb3c6',
  '#ffc8d8',
  '#ff85a1',
  '#ffadc5',
  '#f472b6',
  '#e879a8',
  '#fda4c4',
];
const CENTER_COLORS = ['#ffe066', '#ffd700', '#ffb347', '#fffacd'];

function createFlower(x: number, y: number): Flower {
  const petalCount = 5 + Math.floor(Math.random() * 4);
  const petals: Petal[] = [];
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      angle: (i / petalCount) * Math.PI * 2,
      length: 14 + Math.random() * 10,
      width: 6 + Math.random() * 5,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    });
  }
  return {
    x,
    y,
    scale: 0,
    targetScale: 0.7 + Math.random() * 0.6,
    opacity: 1,
    fadeTimer: 0,
    fadeDuration: 4000 + Math.random() * 2000,
    petals,
    centerRadius: 5 + Math.random() * 4,
    rotation: Math.random() * Math.PI * 2,
    born: performance.now(),
    bloomSpeed: 0.04 + Math.random() * 0.04,
  };
}

function spawnCluster(x: number, y: number): Flower[] {
  const count = 4 + Math.floor(Math.random() * 5);
  const flowers: Flower[] = [];
  for (let i = 0; i < count; i++) {
    const spread = 55;
    const fx = x + (Math.random() - 0.5) * spread;
    const fy = y + (Math.random() - 0.5) * spread;
    flowers.push(createFlower(fx, fy));
  }
  return flowers;
}

function drawPetal(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  angle: number,
  length: number,
  width: number,
  color: string
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(
    width * 0.6, -length * 0.2,
    width * 0.8, -length * 0.7,
    0, -length
  );
  ctx.bezierCurveTo(
    -width * 0.8, -length * 0.7,
    -width * 0.6, -length * 0.2,
    0, 0
  );
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.88;
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,150,180,0.4)';
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.restore();
}

function drawFlower(ctx: CanvasRenderingContext2D, flower: Flower) {
  const { x, y, scale, opacity, petals, centerRadius, rotation } = flower;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.rotate(rotation);

  petals.forEach((petal) => {
    drawPetal(ctx, 0, 0, petal.angle, petal.length, petal.width, petal.color);
  });

  const center = CENTER_COLORS[Math.floor(Math.random() * CENTER_COLORS.length)];
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, centerRadius);
  grad.addColorStop(0, '#fffde4');
  grad.addColorStop(0.5, center);
  grad.addColorStop(1, '#cc8800');
  ctx.beginPath();
  ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.globalAlpha = opacity;
  ctx.fill();

  ctx.restore();
}

interface FlowerCanvasProps {
  mouseX: number;
  mouseY: number;
  isMoving: boolean;
}

const FlowerCanvas: React.FC<FlowerCanvasProps> = ({ mouseX, mouseY, isMoving }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flowersRef = useRef<Flower[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  const spawnFlowers = useCallback((x: number, y: number) => {
    const now = performance.now();
    if (now - lastSpawnRef.current < 120) return;
    lastSpawnRef.current = now;
    const newFlowers = spawnCluster(x, y);
    flowersRef.current = [...flowersRef.current, ...newFlowers].slice(-120);
  }, []);

  useEffect(() => {
    if (!isMoving) return;
    const dx = mouseX - lastMouseRef.current.x;
    const dy = mouseY - lastMouseRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 18) {
      spawnFlowers(mouseX, mouseY);
      lastMouseRef.current = { x: mouseX, y: mouseY };
    }
  }, [mouseX, mouseY, isMoving, spawnFlowers]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      spawnFlowers(e.clientX, e.clientY);
      spawnFlowers(e.clientX + (Math.random() - 0.5) * 40, e.clientY + (Math.random() - 0.5) * 40);
    },
    [spawnFlowers]
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const loop = (now: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowersRef.current = flowersRef.current.filter((f) => f.opacity > 0.01);

      flowersRef.current.forEach((flower) => {
        if (flower.scale < flower.targetScale) {
          const t = Math.min(1, (now - flower.born) / 600);
          const elastic = 1 - Math.pow(1 - t, 3) * Math.cos(t * Math.PI * 4);
          flower.scale = elastic * flower.targetScale;
        }

        if (flower.scale >= flower.targetScale * 0.95) {
          flower.fadeTimer += 16;
          flower.opacity = Math.max(0, 1 - flower.fadeTimer / flower.fadeDuration);
        }

        drawFlower(ctx, flower);
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

export default FlowerCanvas;

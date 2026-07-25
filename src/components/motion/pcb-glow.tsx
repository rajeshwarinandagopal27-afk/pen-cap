"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Seg = { x1: number; y1: number; x2: number; y2: number };
type Pad = { x: number; y: number };

/**
 * A faint PCB trace field that illuminates near the cursor. Deterministic
 * layout; pointer reactivity + rAF only run when motion is allowed.
 */
export function PcbGlow({ className }: { className?: string }) {
  const ref = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, dpr = 1;
    let segs: Seg[] = [];
    let pads: Pad[] = [];
    const R = 150;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      segs = []; pads = [];
      const gap = 46;
      const cols = Math.ceil(W / gap) + 1;
      const rows = Math.ceil(H / gap) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap;
          const y = r * gap;
          const seed = (c * 13 + r * 7) % 4;
          if (seed === 0 && c < cols - 1) segs.push({ x1: x, y1: y, x2: x + gap, y2: y });
          else if (seed === 1 && r < rows - 1) segs.push({ x1: x, y1: y, x2: x, y2: y + gap });
          else if (seed === 2 && c < cols - 1 && r < rows - 1) {
            segs.push({ x1: x, y1: y, x2: x + gap, y2: y });
            segs.push({ x1: x + gap, y1: y, x2: x + gap, y2: y + gap });
          }
          if ((c * 3 + r * 5) % 6 === 0) pads.push({ x, y });
        }
      }
    };
    build();

    const drawStatic = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(88,162,255,0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const s of segs) {
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
      }
      ctx.stroke();
    };

    if (reduce) {
      drawStatic();
      const onResize = () => { build(); drawStatic(); };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    let raf = 0;
    const render = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.15;
      pointer.y += (pointer.ty - pointer.y) * 0.15;
      ctx.clearRect(0, 0, W, H);

      // base traces
      ctx.strokeStyle = "rgba(88,162,255,0.07)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const s of segs) {
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
      }
      ctx.stroke();

      // illuminated near pointer
      for (const s of segs) {
        const mx = (s.x1 + s.x2) / 2;
        const my = (s.y1 + s.y2) / 2;
        const d = Math.hypot(mx - pointer.x, my - pointer.y);
        if (d < R) {
          const a = (1 - d / R) * 0.85;
          ctx.strokeStyle = `rgba(120,180,255,${a})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
          ctx.stroke();
        }
      }
      for (const p of pads) {
        const d = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        if (d < R) {
          const a = (1 - d / R) * 0.9;
          ctx.fillStyle = `rgba(159,198,255,${a})`;
          ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
        }
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= -R && x <= W + R && y >= -R && y <= H + R) {
        pointer.tx = x;
        pointer.ty = y;
      } else {
        pointer.tx = -9999;
        pointer.ty = -9999;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(timer); timer = setTimeout(build, 150); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={cn("h-full w-full", className)} />;
}

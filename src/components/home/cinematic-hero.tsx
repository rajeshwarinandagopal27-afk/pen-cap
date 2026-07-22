"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { TrustBadges } from "@/components/common/trust-badges";
import { NodeMark } from "@/components/brand/logo";

/* ---------- formation geometry ---------- */
type Vec = { x: number; y: number };

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function buildChip(cx: number, cy: number, s: number): Vec[] {
  const pts: Vec[] = [];
  const half = s / 2;
  // body perimeter (rounded square)
  const perim = 76;
  for (let i = 0; i < perim; i++) {
    const t = (i / perim) * Math.PI * 2;
    const rx = Math.cos(t);
    const ry = Math.sin(t);
    const p = 6; // superellipse for soft corners
    const x = cx + half * Math.sign(rx) * Math.pow(Math.abs(rx), 2 / p);
    const y = cy + half * Math.sign(ry) * Math.pow(Math.abs(ry), 2 / p);
    pts.push({ x, y });
  }
  // pins on 4 sides
  const pinsPerSide = 4;
  for (let side = 0; side < 4; side++) {
    for (let i = 0; i < pinsPerSide; i++) {
      const f = (i + 1) / (pinsPerSide + 1);
      const along = lerp(-half * 0.7, half * 0.7, f);
      for (let j = 0; j < 2; j++) {
        const out = half + s * (0.09 + j * 0.09);
        if (side === 0) pts.push({ x: cx + along, y: cy - out });
        if (side === 1) pts.push({ x: cx + out, y: cy + along });
        if (side === 2) pts.push({ x: cx + along, y: cy + out });
        if (side === 3) pts.push({ x: cx - out, y: cy + along });
      }
    }
  }
  // inner die grid
  const gridN = 6;
  for (let a = 0; a < gridN; a++) {
    for (let b = 0; b < gridN; b++) {
      if ((a + b) % 2 === 0) continue;
      pts.push({
        x: cx + lerp(-half * 0.5, half * 0.5, a / (gridN - 1)),
        y: cy + lerp(-half * 0.5, half * 0.5, b / (gridN - 1)),
      });
    }
  }
  return pts;
}

function buildNode(cx: number, cy: number, s: number, count: number): Vec[] {
  const pts: Vec[] = [];
  const node: Vec = { x: cx + s * 0.28, y: cy };
  const startX = cx - s * 0.42;
  const yOff = s * 0.26;
  const lineTargets = [cy - yOff, cy, cy + yOff];
  const perLine = 34;
  for (const ty of lineTargets) {
    for (let i = 0; i < perLine; i++) {
      const f = i / (perLine - 1);
      pts.push({ x: lerp(startX, node.x, f), y: lerp(ty, node.y, f) });
    }
  }
  // forward delivery line
  for (let i = 0; i < 14; i++) {
    const f = i / 13;
    pts.push({ x: lerp(node.x, node.x + s * 0.36, f), y: node.y });
  }
  // node cluster (fill remaining)
  while (pts.length < count) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.5) * s * 0.05;
    pts.push({ x: node.x + Math.cos(a) * r, y: node.y + Math.sin(a) * r });
  }
  return pts.slice(0, count);
}

function HeroCanvas() {
  const ref = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let chip: Vec[] = [];
    let node: Vec[] = [];
    let scatter: Vec[] = [];
    let cur: Vec[] = [];
    let N = 160;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = W * 0.5;
      const cy = H * 0.4;
      const s = Math.min(W, H) * 0.34;
      chip = buildChip(cx, cy, s);
      N = chip.length;
      node = buildNode(cx, cy, s, N);
      scatter = Array.from({ length: N }, () => {
        const a = Math.random() * Math.PI * 2;
        const r = Math.min(W, H) * (0.15 + Math.random() * 0.4);
        return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.7 };
      });
      cur = scatter.map((p) => ({ ...p }));
    };

    setup();
    const start = performance.now();
    let raf = 0;

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, W, H);

      // phase envelopes
      const appear = Math.min(1, t / 0.6);
      const toChip = easeInOut(Math.min(1, Math.max(0, (t - 0.6) / 1.0)));
      const toNode = easeInOut(Math.min(1, Math.max(0, (t - 2.4) / 1.0)));
      const lock = Math.min(1, Math.max(0, (t - 3.4) / 0.8));

      for (let i = 0; i < N; i++) {
        // scatter -> chip -> node
        const cxp = lerp(scatter[i].x, chip[i].x, toChip);
        const cyp = lerp(scatter[i].y, chip[i].y, toChip);
        const tx = lerp(cxp, node[i].x, toNode);
        const ty = lerp(cyp, node[i].y, toNode);
        // gentle idle drift after lock
        const idle = lock >= 1 ? Math.sin(t * 1.4 + i) * 0.4 : 0;
        cur[i].x += (tx - cur[i].x) * 0.2;
        cur[i].y += (ty + idle - cur[i].y) * 0.2;
      }

      // connection lines while chip is coherent
      const conn = Math.min(toChip, 1 - toNode);
      if (conn > 0.05) {
        ctx.strokeStyle = `rgba(88,162,255,${0.14 * conn})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const a = cur[i];
          const b = cur[(i + 1) % N];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < Math.min(W, H) * 0.09) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
        ctx.stroke();
      }

      // particles
      for (let i = 0; i < N; i++) {
        const p = cur[i];
        const glow = 0.5 + 0.5 * appear;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,193,255,${0.85 * glow})`;
        ctx.fill();
      }

      // node lock glow
      if (toNode > 0.4) {
        const nx = W * 0.5 + Math.min(W, H) * 0.34 * 0.28;
        const ny = H * 0.4;
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, 40 + lock * 16);
        g.addColorStop(0, `rgba(46,134,255,${0.5 * toNode})`);
        g.addColorStop(1, "rgba(46,134,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(nx, ny, 56, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(nx, ny, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.9 * toNode})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function CinematicHero() {
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = React.useState(reduce ?? false);

  React.useEffect(() => {
    if (reduce) {
      setRevealed(true);
      return;
    }
    const id = setTimeout(() => setRevealed(true), 3200);
    return () => clearTimeout(id);
  }, [reduce]);

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col items-center overflow-hidden bg-noise">
      {/* ambient + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-30" />
        <div className="ambient left-1/2 top-[26%] h-[520px] w-[720px] -translate-x-1/2 opacity-50" />
      </div>

      {/* formation layer */}
      {reduce ? (
        <div className="pointer-events-none absolute inset-x-0 top-[24%] flex justify-center">
          <NodeMark className="h-20 w-auto" />
        </div>
      ) : (
        <HeroCanvas />
      )}

      {/* content */}
      <div className="container-page relative z-10 mt-[46vh] flex flex-col items-center text-center sm:mt-[44vh]">
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-brand" /> B2B Electronic Component Sourcing
        </motion.div>

        <motion.h1
          custom={1}
          variants={reveal}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem]"
        >
          <span className="text-gradient">Engineering reliable electronic</span>{" "}
          <span className="text-accent-gradient">component supply chains.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary"
        >
          SLT Technology sources genuine components for OEMs, EMS providers and engineering teams — precision
          procurement, global reach, and an RFQ-first process built for production.
        </motion.p>

        <motion.div
          custom={3}
          variants={reveal}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <Button asChild variant="brand" size="lg">
              <Link href="/request-rfq">
                Request an RFQ <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="outline" size="lg">
              <Link href="/request-rfq#bom-upload">
                <UploadCloud className="size-4" /> Upload BOM
              </Link>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          custom={4}
          variants={reveal}
          initial="hidden"
          animate={revealed ? "show" : "hidden"}
          className="mt-10"
        >
          <TrustBadges className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}

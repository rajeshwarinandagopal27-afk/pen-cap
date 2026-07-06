"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface NetworkGraphProps {
  className?: string;
  dense?: boolean;
}

const NODES_DENSE = [
  [40, 60], [180, 30], [320, 90], [460, 40], [600, 100], [740, 50], [860, 110],
  [110, 160], [260, 200], [400, 170], [540, 220], [680, 180], [800, 230],
  [60, 280], [220, 320], [380, 290], [520, 340], [660, 300], [780, 350], [900, 300],
] as const;

const NODES_SPARSE = [
  [60, 60], [300, 40], [560, 90], [780, 50],
  [160, 220], [420, 190], [660, 240],
] as const;

function buildEdges(nodes: readonly (readonly [number, number])[]) {
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    const distances = nodes
      .map((n, j) => ({ j, d: Math.hypot(n[0] - nodes[i][0], n[1] - nodes[i][1]) }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d);
    for (const { j } of distances.slice(0, 2)) {
      if (!edges.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

/**
 * The one signature technical motif (docs/design/01-brand-strategy.md):
 * a fine-line node/edge graph used sparingly as background texture only —
 * never full-bleed decoration, never behind foreground text/CTAs directly.
 */
function NetworkGraph({ className, dense = false }: NetworkGraphProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-24, 24]);

  const nodes = dense ? NODES_DENSE : NODES_SPARSE;
  const edges = React.useMemo(() => buildEdges(nodes), [nodes]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.svg
        style={{ y }}
        viewBox="0 0 960 400"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <g stroke="var(--color-accent)" strokeOpacity="0.16" strokeWidth="1">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
          ))}
        </g>
        <g fill="var(--color-accent)" fillOpacity="0.35">
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}

export { NetworkGraph };

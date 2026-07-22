"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

/* ---------------------------------------------------------------------
 * Dotted world map. Continents are approximated as a dot grid; supplier
 * routes arc toward the India hub with subtle light packets travelling
 * along them (SMIL, cheap, GPU-composited). Deterministic — no random —
 * so SSR and client render identically.
 * ------------------------------------------------------------------- */

const VW = 800;
const VH = 380;
const COLS = 72;
const ROWS = 34;

// Continent blocks in grid coords: [c0, r0, c1, r1]
const LAND: [number, number, number, number][] = [
  [8, 4, 20, 13], // North America
  [16, 13, 19, 15], // Central America
  [18, 15, 24, 25], // South America
  [24, 2, 28, 5], // Greenland
  [33, 5, 39, 9], // Europe
  [34, 10, 42, 20], // Africa
  [40, 9, 44, 12], // Middle East
  [40, 3, 64, 7], // Northern Asia
  [44, 7, 60, 12], // Asia
  [46, 11, 50, 14], // India subcontinent
  [52, 12, 58, 16], // SE Asia
  [60, 7, 62, 9], // Japan
  [56, 18, 64, 23], // Australia
];

function gx(col: number) {
  return 20 + (col / (COLS - 1)) * (VW - 40);
}
function gy(row: number) {
  return 20 + (row / (ROWS - 1)) * (VH - 40);
}
function isLand(c: number, r: number) {
  return LAND.some(([c0, r0, c1, r1]) => c >= c0 && c <= c1 && r >= r0 && r <= r1);
}

const dots: { x: number; y: number }[] = [];
for (let c = 0; c < COLS; c++) {
  for (let r = 0; r < ROWS; r++) {
    if (!isLand(c, r)) continue;
    const jitter = ((c * 7 + r * 13) % 5) - 2;
    dots.push({ x: gx(c) + jitter * 0.6, y: gy(r) + (((c + r) % 3) - 1) * 0.6 });
  }
}

const HUB = { x: gx(48), y: gy(12) }; // India
const suppliers = [
  { x: gx(13), y: gy(8), label: "Americas" },
  { x: gx(21), y: gy(20) },
  { x: gx(36), y: gy(7), label: "Europe" },
  { x: gx(38), y: gy(15), label: "Africa" },
  { x: gx(58), y: gy(9), label: "East Asia" },
  { x: gx(55), y: gy(14), label: "SE Asia" },
  { x: gx(60), y: gy(20), label: "Oceania" },
];

function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const nx = -(to.y - from.y) / dist;
  const ny = (to.x - from.x) / dist;
  const lift = dist * 0.22;
  return `M ${from.x} ${from.y} Q ${mx + nx * lift} ${my + ny * lift} ${to.x} ${to.y}`;
}

export function WorldMap() {
  const reduce = useReducedMotion();
  const routes = suppliers.map((s) => arcPath(s, HUB));

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      className="w-full"
      role="img"
      aria-label="Dotted world map showing global supplier routes converging on SLT's India hub"
    >
      <defs>
        <radialGradient id="wm-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent-500)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* land dots */}
      <g className="fill-ink-500">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={1.5} opacity={0.55} />
        ))}
      </g>

      {/* routes */}
      <g fill="none" className="stroke-accent-500" strokeWidth={1} strokeLinecap="round">
        {routes.map((d, i) => (
          <path key={i} d={d} opacity={0.32} />
        ))}
      </g>

      {/* travelling light packets */}
      {!reduce &&
        routes.map((d, i) => (
          <circle key={`p${i}`} r={2.4} fill="#dbe9ff">
            <animateMotion dur={`${3.4 + (i % 3) * 0.5}s`} begin={`${i * 0.6}s`} repeatCount="indefinite" path={d} rotate="auto" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${3.4 + (i % 3) * 0.5}s`} begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}

      {/* supplier nodes */}
      {suppliers.map((s, i) => (
        <g key={`s${i}`}>
          <circle cx={s.x} cy={s.y} r={3} className="fill-accent-400" />
          {!reduce && (
            <circle cx={s.x} cy={s.y} r={3} className="fill-none stroke-accent-400">
              <animate attributeName="r" values="3;9" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          )}
          {s.label && (
            <text x={s.x} y={s.y - 10} textAnchor="middle" className="fill-text-muted font-mono" style={{ fontSize: 10, letterSpacing: "0.06em" }}>
              {s.label}
            </text>
          )}
        </g>
      ))}

      {/* India hub */}
      <circle cx={HUB.x} cy={HUB.y} r={40} fill="url(#wm-hub)" />
      <circle cx={HUB.x} cy={HUB.y} r={5} className="fill-white" />
      {!reduce && (
        <circle cx={HUB.x} cy={HUB.y} r={5} className="fill-none stroke-white">
          <animate attributeName="r" values="5;22" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.6s" repeatCount="indefinite" />
        </circle>
      )}
      <text x={HUB.x} y={HUB.y + 20} textAnchor="middle" className="fill-text-secondary font-mono" style={{ fontSize: 11, letterSpacing: "0.1em" }}>
        INDIA
      </text>
    </svg>
  );
}

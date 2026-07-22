"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const HUB = { x: 690, y: 250 };

const nodes = [
  { x: 150, y: 150, r: "North America" },
  { x: 210, y: 195 },
  { x: 250, y: 330, r: "South America" },
  { x: 520, y: 130, r: "Europe" },
  { x: 560, y: 175 },
  { x: 545, y: 270, r: "Africa" },
  { x: 780, y: 170, r: "East Asia" },
  { x: 830, y: 210 },
  { x: 690, y: 250, r: "India" },
  { x: 820, y: 330, r: "SE Asia" },
  { x: 300, y: 260 },
  { x: 480, y: 320 },
];

function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - Math.abs(to.x - from.x) * 0.28 - 30;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function GlobalSourcing() {
  const reduce = useReducedMotion();
  const targets = nodes.filter((n) => !(n.x === HUB.x && n.y === HUB.y));

  return (
    <section className="relative overflow-hidden border-y border-border bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient left-[60%] top-[30%] h-[420px] w-[560px] opacity-30" />
      </div>
      <div className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Global Sourcing"
          title="One accountable partner, a worldwide supply base."
          description="When a component isn't on a local shelf, the search goes global. Supplier routes converge on your requirement — and on our India operations."
        />

        <Reveal className="mt-14">
          <div className="relative mx-auto max-w-5xl">
            <svg viewBox="0 0 960 460" className="w-full" role="img" aria-label="Abstract map of global supplier routes converging on India">
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-accent-500)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* faint region grid */}
              <g className="stroke-border" strokeWidth="1" opacity="0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v${i}`} x1={80 + i * 100} y1="40" x2={80 + i * 100} y2="420" />
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <line key={`h${i}`} x1="60" y1={90 + i * 100} x2="900" y2={90 + i * 100} />
                ))}
              </g>

              {/* arcs from hub */}
              {targets.map((t, i) => (
                <motion.path
                  key={`arc${i}`}
                  d={arc(HUB, t)}
                  fill="none"
                  className="stroke-accent-500"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
                />
              ))}

              {/* hub glow */}
              <circle cx={HUB.x} cy={HUB.y} r="46" fill="url(#hubGlow)" />

              {/* nodes */}
              {nodes.map((n, i) => {
                const isHub = n.x === HUB.x && n.y === HUB.y;
                return (
                  <g key={`n${i}`}>
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r={isHub ? 6 : 3.5}
                      className={isHub ? "fill-white" : "fill-accent-400"}
                      initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    />
                    {!reduce && (
                      <circle cx={n.x} cy={n.y} r={isHub ? 6 : 3.5} className="fill-none stroke-accent-400">
                        <animate attributeName="r" values={isHub ? "6;18" : "3.5;10"} dur="2.8s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0" dur="2.8s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                      </circle>
                    )}
                    {n.r && (
                      <text
                        x={n.x}
                        y={n.y - 12}
                        textAnchor="middle"
                        className="fill-text-muted font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.08em" }}
                      >
                        {n.r}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Worldwide reach", v: "Suppliers sourced across continents, consolidated into one partner." },
            { k: "Hard-to-find & obsolete", v: "Allocated, constrained and end-of-life parts located through specialist channels." },
            { k: "Verified before dispatch", v: "Authenticity and documentation checked at intake, wherever a part originates." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.06} className="rounded-xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{c.k}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{c.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

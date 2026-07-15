"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/common/eyebrow";
import { stats } from "@/lib/content";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };

  return (
    <section className="relative isolate overflow-hidden">
      {/* backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.55]" />
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="container-page grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div className="flex flex-col items-start gap-6" {...motionProps}>
          <motion.div variants={reduce ? undefined : item}>
            <Eyebrow>Precision Sourcing · India</Eyebrow>
          </motion.div>

          <motion.h1
            variants={reduce ? undefined : item}
            className="max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            Global silicon, <span className="text-brand-gradient">sourced with precision.</span>
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="max-w-xl text-pretty text-lg leading-relaxed text-text-secondary"
          >
            SLT Technology is the premium electronic-components partner for India&apos;s manufacturers, OEMs and
            R&amp;D teams — authentic parts, global reach, and engineering-grade reliability on every order.
          </motion.p>

          <motion.div variants={reduce ? undefined : item} className="flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href="/request-rfq">
                Request an RFQ <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">Explore products</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={reduce ? undefined : item}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-text-muted"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" /> Authentic &amp; traceable
            </li>
            <li className="inline-flex items-center gap-2">
              <Zap className="size-4 text-brand" /> &lt; 48-hour RFQ turnaround
            </li>
          </motion.ul>
        </motion.div>

        {/* Convergence motif — many sources into one copper node */}
        <ConvergenceMotif reduce={!!reduce} />
      </div>

      {/* stat strip */}
      <div className="border-y border-border bg-surface/40">
        <div className="container-page grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-6 text-center md:px-6">
              <div className="font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConvergenceMotif({ reduce }: { reduce: boolean }) {
  const sources = [12, 24, 36, 50, 64, 78, 90];
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-copper-400)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-copper-400)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* converging vectors */}
        <g className="stroke-ink-400/50" strokeWidth={1.25} strokeLinecap="round">
          {sources.map((y, i) => (
            <line key={i} x1="4" y1={y + 6} x2="150" y2="100" />
          ))}
        </g>
        {/* forward delivery line */}
        <line x1="150" y1="100" x2="196" y2="100" className="stroke-copper-500 dark:stroke-copper-400" strokeWidth={2} strokeLinecap="round" />
        {/* glow + node */}
        <circle cx="150" cy="100" r="34" fill="url(#nodeGlow)" />
        <circle cx="150" cy="100" r="9" className="fill-copper-500 dark:fill-copper-400" />
        {!reduce && (
          <circle cx="150" cy="100" r="9" className="fill-none stroke-copper-400" strokeWidth={1.5}>
            <animate attributeName="r" values="9;30" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0" dur="2.6s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
}

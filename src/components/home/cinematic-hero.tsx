"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { TrustBadges } from "@/components/common/trust-badges";
import { HeroScene } from "@/components/home/hero-scene";

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function CinematicHero() {
  const reduce = useReducedMotion();
  const anim = (i: number) => ({
    variants: reveal,
    custom: i,
    initial: reduce ? undefined : ("hidden" as const),
    animate: reduce ? undefined : ("show" as const),
  });

  return (
    <section className="relative isolate flex min-h-[92vh] flex-col items-center overflow-hidden bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-30" />
        <div className="ambient left-1/2 top-[24%] h-[560px] w-[760px] -translate-x-1/2 opacity-50" />
      </div>

      {/* living 3D backdrop (poster fallback for reduced-motion / no-webgl) */}
      <div className="absolute inset-x-0 top-0 h-[62vh]">
        <HeroScene />
      </div>

      <div className="container-page relative z-10 mt-[48vh] flex flex-col items-center text-center sm:mt-[46vh]">
        <motion.div
          {...anim(0)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-brand" /> B2B Electronic Component Sourcing
        </motion.div>

        <motion.h1
          {...anim(1)}
          className="max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem]"
        >
          <span className="text-gradient">Engineering reliable electronic</span>{" "}
          <span className="text-accent-gradient">component supply chains.</span>
        </motion.h1>

        <motion.p
          {...anim(2)}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-text-secondary"
        >
          SLT Technology sources genuine components for OEMs, EMS providers and engineering teams — precision
          procurement, global reach, and an RFQ-first process built for production.
        </motion.p>

        <motion.div {...anim(3)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

        <motion.div {...anim(4)} className="mt-10">
          <TrustBadges className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}

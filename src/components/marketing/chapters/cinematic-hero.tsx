"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroResolveText } from "@/components/marketing/hero-resolve-text";
import { NetworkMotif } from "@/components/marketing/network-motif";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function CinematicHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="feeling"
      className="dark relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-canvas text-text-primary"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 28%, color-mix(in srgb, var(--color-signal-500) 20%, transparent), transparent 72%)",
        }}
      />
      <NetworkMotif className="left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.05] lg:block" />

      <div className="container-page relative flex flex-col items-start gap-8 py-32">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-signal-300"
        >
          PenCap Institute of Excellence
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2.75rem,6vw+1rem,7rem)] font-semibold leading-[0.98] tracking-tight text-balance">
          <HeroResolveText text="What kind of future" />
          <br />
          <span className="text-signal-300">
            <HeroResolveText text="could you have?" />
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg text-lg leading-relaxed text-text-secondary"
        >
          Not which course to take. Which life to build. This is where that decision starts.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button asChild size="lg">
            <Link href="/admissions">Begin your path</Link>
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#fear"
        aria-label="Scroll to continue"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-text-primary"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="size-5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}

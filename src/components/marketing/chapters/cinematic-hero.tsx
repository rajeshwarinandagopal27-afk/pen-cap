"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
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
            "radial-gradient(60% 55% at 50% 22%, color-mix(in srgb, var(--color-signal-500) 10%, transparent), transparent 75%)",
        }}
      />
      <NetworkMotif className="left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.04] lg:block" />

      <div className="container-page relative flex flex-col items-start gap-8 py-32">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-300"
        >
          PenCap Institute of Excellence
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[clamp(2.75rem,6vw+1rem,7rem)] font-semibold leading-[0.98] tracking-tight text-balance"
        >
          What kind of future
          <br />
          <span className="text-signal-300">could you have?</span>
        </motion.h1>

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
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="size-4" aria-hidden="true" />
      </motion.a>
    </section>
  );
}

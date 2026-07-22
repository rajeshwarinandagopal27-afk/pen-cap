"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionHeading } from "@/components/common/section-heading";
import { whyChoose } from "@/lib/content";

/** Hand-drawn stroke icons (paths draw in on view), aligned to whyChoose order. */
const iconPaths: string[][] = [
  // Built for Procurement — document + check
  ["M6 3.5h8l4 4v13H6z", "M9 13l2.5 2.5 4-5"],
  // Worldwide Supplier Network — globe
  ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 3c3.2 3 3.2 15 0 18", "M12 3c-3.2 3-3.2 15 0 18", "M3 12h18"],
  // Engineering-Literate Sourcing — node graph
  ["M6 7l6 3", "M18 7l-6 3", "M12 10v7", "M6 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M18 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"],
  // Authenticity Verification — shield + check
  ["M12 3l7 3v5c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z", "M9 12l2 2 4-4"],
  // Built for Constrained Parts — magnifier
  ["M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z", "M20 20l-4.6-4.6"],
  // Direct Technical Sales Support — chat + waveform
  ["M4 5h16v11H9l-4 3v-3H4z", "M8 11h1.5l1.5-3.5 2 7 1.5-3.5H16"],
];

const svgVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } },
};

export function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-20" />
      </div>
      <div className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Why Choose SLT"
          title="Chosen for how we source, not what we stock."
          description="Procurement teams don't need another catalogue. They need a partner who reads the datasheet, verifies the part, and answers the phone."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-accent-500/40"
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-9 text-brand"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={reduce ? undefined : svgVariants}
                initial={reduce ? undefined : "hidden"}
                whileInView={reduce ? undefined : "show"}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                {iconPaths[i].map((d, j) => (
                  <motion.path
                    key={j}
                    d={d}
                    stroke="currentColor"
                    variants={reduce ? undefined : pathVariants}
                  />
                ))}
              </motion.svg>
              <h3 className="font-display text-lg font-bold tracking-tight text-text-primary">{v.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

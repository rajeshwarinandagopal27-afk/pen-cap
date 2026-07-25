"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeading } from "@/components/common/section-heading";
import { TiltCard } from "@/components/motion/tilt-card";
import { manufacturers } from "@/lib/content";

export function ManufacturerWall() {
  const reduce = useReducedMotion();

  return (
    <section className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Global Manufacturers"
        title="Components from globally recognized manufacturers."
        description="Brand names below identify the product lines we source across the electronics supply chain. They do not imply authorization, partnership or affiliation."
        align="center"
        className="mx-auto items-center"
      />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {manufacturers.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
          >
            <TiltCard max={6} className="group h-full">
              <div
                className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-border bg-surface/50 px-4 text-center transition-colors duration-300 hover:border-accent-500/40"
                style={reduce ? undefined : { animation: `float 9s ease-in-out ${(i % 5) * 0.7}s infinite` }}
              >
                <span className="font-display text-sm font-semibold tracking-tight text-text-secondary transition-colors duration-300 group-hover:text-text-primary sm:text-base">
                  {name}
                </span>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-surface-raised/95 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-transform duration-300 group-hover:translate-y-0">
                  Sourced across the supply chain
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

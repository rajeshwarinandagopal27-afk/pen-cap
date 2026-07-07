"use client";

import * as React from "react";
import { motion, useScroll } from "framer-motion";

import { Reveal } from "@/components/marketing/reveal";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { journeyPhaseLabels, journeyStages } from "@/lib/data/journey";

export function JourneyRoadmap() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"],
  });

  return (
    <section id="journey" className="relative overflow-hidden bg-canvas py-28 sm:py-36">
      <div className="container-page">
        <div className="mb-16 max-w-xl">
          <SectionEyebrow>Chapter Five — The Journey</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
            Eleven stages. One direction: forward.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Not a syllabus — a route. Every stage builds on the last, and every stage is something
            you can point to in an interview.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-2xl">
          <div className="absolute left-[5px] top-1 h-[calc(100%-0.5rem)] w-px bg-border-muted" aria-hidden="true" />
          <motion.div
            className="absolute left-[5px] top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-accent"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          <ol className="relative flex flex-col gap-12">
            {journeyStages.map((stage, i) => (
              <li key={stage.title} className="relative pl-10">
                <Reveal delay={Math.min(i * 0.03, 0.24)}>
                  <span className="absolute left-[5px] top-1.5 size-[11px] -translate-x-1/2 rounded-full border-2 border-accent bg-canvas" />
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                    <span className="font-mono">{String(i + 1).padStart(2, "0")}</span> · {journeyPhaseLabels[stage.phase]}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">{stage.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-text-secondary">{stage.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

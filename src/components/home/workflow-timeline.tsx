"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { workflowSteps } from "@/lib/content";

export function WorkflowTimeline() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Procurement Workflow"
        title="From RFQ to delivery, engineered as one process."
        description="Every requirement follows the same disciplined path — traceable at each step, from the first quote request to the parts on your dock."
      />

      <div ref={ref} className="relative mt-16 pl-16 sm:pl-20">
        {/* track */}
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border sm:left-[31px]" aria-hidden="true" />
        {/* progress fill */}
        <motion.div
          aria-hidden="true"
          className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent-400 to-accent-600 sm:left-[31px]"
          style={reduce ? { scaleY: 1 } : { scaleY }}
        />

        <ol className="flex flex-col gap-10 sm:gap-12">
          {workflowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} y={20}>
                <li className="relative">
                  {/* node */}
                  <span className="absolute -left-16 top-0 flex size-14 items-center justify-center rounded-full border border-border bg-surface sm:-left-20 sm:size-[3.75rem]">
                    <Icon className="size-5 text-brand" aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-brand font-mono text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <div className="rounded-xl border border-border bg-surface/60 p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight text-text-primary">{step.title}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-text-secondary">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

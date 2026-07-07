"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/marketing/reveal";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { studentStories } from "@/lib/data/stories";
import { testimonials } from "@/lib/data/testimonials";

export function StudentStories() {
  const stories = studentStories
    .map((story) => ({ story, testimonial: testimonials.find((t) => t.id === story.testimonialId) }))
    .filter((entry): entry is { story: (typeof studentStories)[number]; testimonial: NonNullable<(typeof entry)["testimonial"]> } =>
      Boolean(entry.testimonial)
    );

  return (
    <section id="people" className="relative overflow-hidden bg-canvas py-28 sm:py-36">
      <div className="container-page">
        <div className="mb-16 max-w-xl">
          <SectionEyebrow>Chapter Seven — The People</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
            Not testimonials. Transformations.
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {stories.map(({ story, testimonial }) => (
            <Reveal key={testimonial.id}>
              <div className="grid gap-10 border-t border-border-muted pt-10 md:grid-cols-2 md:gap-16">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Before</p>
                  <p className="mt-2 font-display text-xl font-medium leading-snug text-text-secondary">
                    {story.beforeLine}
                  </p>

                  <p className="mt-6 text-xs font-medium uppercase tracking-wider text-text-muted">Journey</p>
                  <p className="mt-2 max-w-lg text-lg leading-relaxed text-text-primary">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <p className="mt-6 text-xs font-medium uppercase tracking-wider text-text-muted">After</p>
                  <p className="mt-2 font-display text-lg font-semibold text-text-primary">
                    {testimonial.name} — {testimonial.currentRole}, {testimonial.currentCompany}
                  </p>
                  {testimonial.outcomeChip && (
                    <Badge variant="success" className="mt-2">
                      {testimonial.outcomeChip}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col justify-center gap-6 rounded-[var(--radius-xl)] border border-border bg-surface-raised p-6">
                  <div>
                    <p className="text-xs text-text-muted">Confidence, before → after</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="font-mono text-sm text-text-muted">{story.confidenceBefore}%</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border-muted">
                        <motion.div
                          className="h-full origin-left rounded-full bg-accent"
                          initial={{ scaleX: story.confidenceBefore / 100 }}
                          whileInView={{ scaleX: story.confidenceAfter / 100 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                      <span className="font-mono text-sm font-medium text-text-primary">{story.confidenceAfter}%</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-text-muted">Salary lift after placement</p>
                    <p className="mt-1 font-mono text-3xl font-medium text-text-primary">+{story.salaryLift}%</p>
                  </div>

                  <div>
                    <p className="text-xs text-text-muted">Program</p>
                    <p className="mt-1 text-sm font-medium text-text-primary">{testimonial.program}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-border-muted pt-10">
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-text-muted">Now working at</p>
          <EmployerStrip className="justify-start" />
        </Reveal>
      </div>
    </section>
  );
}

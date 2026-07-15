import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Trusted by engineers"
          title="What sourcing teams say."
          description="Representative outcomes from procurement and engineering teams. Named references available on request."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-surface p-7">
                <Quote className="size-6 text-brand/60" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-text-primary">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border-muted pt-4">
                  <div className="font-semibold text-text-primary">{t.name}</div>
                  <div className="font-mono text-xs text-text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

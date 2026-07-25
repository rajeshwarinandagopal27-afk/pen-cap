import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { qualityPillars } from "@/lib/content";

export function QualitySection() {
  const featured = qualityPillars.slice(0, 4);

  return (
    <section className="relative overflow-hidden border-y border-border bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient left-[10%] top-[20%] h-[380px] w-[480px] opacity-20" />
      </div>
      <div className="container-page py-24 sm:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Verification happens before dispatch, not after failure."
            description="Authenticity, inspection and traceability are checkpoints in every order — checked before a component leaves our custody."
          />
          <Reveal>
            <Button asChild variant="outline">
              <Link href="/quality">
                Our quality standard <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((q, i) => {
            const Icon = q.icon;
            return (
              <Reveal key={q.title} delay={i * 0.06} className="group rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-accent-500/40">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-raised text-brand transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold tracking-tight text-text-primary">{q.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{q.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

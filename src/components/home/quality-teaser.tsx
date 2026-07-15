import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { qualityPillars } from "@/lib/content";

export function QualityTeaser() {
  const featured = qualityPillars.slice(0, 4);

  return (
    <section className="border-t border-border bg-surface/40">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Verification happens before dispatch, not after a failure."
            description="Authenticity, inspection and traceability are checkpoints in the order — not optional add-ons."
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
              <Reveal key={q.title} delay={i * 0.06} className="rounded-xl border border-border bg-surface p-6">
                <Icon className="size-5 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-text-primary">{q.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{q.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

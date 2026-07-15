import Link from "next/link";
import { ArrowRight, Globe2, Search, Recycle, Gauge } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Globe2, title: "Worldwide supplier network", body: "Sourcing that reaches beyond any single catalogue or region." },
  { icon: Search, title: "Hard-to-find components", body: "Allocated and constrained parts located through specialist channels." },
  { icon: Recycle, title: "Obsolete part sourcing", body: "End-of-life components found for programmes that can't redesign." },
  { icon: Gauge, title: "Lead-time reduction", body: "Early engagement on constrained parts, before they become a shortage." },
];

export function GlobalSourcingTeaser() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Global Sourcing"
            title="Reach that extends past a single supply channel."
            description="When a component isn't sitting on a shelf, sourcing becomes a search problem. That search is where SLT operates."
          />
          <Reveal>
            <Button asChild variant="outline">
              <Link href="/global-sourcing">
                Global sourcing <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.06} className="rounded-xl border border-border bg-surface p-6">
                <Icon className="size-5 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-text-primary">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

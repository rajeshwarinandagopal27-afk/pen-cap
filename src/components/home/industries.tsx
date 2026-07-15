import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sourcing decisions informed by how the part gets used."
          description="From automation floors to defense programmes — component choices made in the context of the application."
        />
        <Reveal>
          <Button asChild variant="outline">
            <Link href="/industries">
              All industries <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.slug} delay={(i % 4) * 0.05}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-6 text-brand" />
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-text-primary">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{ind.blurb}</p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

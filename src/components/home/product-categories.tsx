import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/content";

export function ProductCategories() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Product Families"
          title="Nine component families, one trusted source."
          description="From integrated circuits to industrial electronics — quoted, verified and delivered by a single accountable partner."
        />
        <Reveal>
          <Button asChild variant="outline">
            <Link href="/products">
              View all products <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Reveal key={cat.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/products#${cat.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <ArrowRight className="size-4 -translate-x-1 text-text-muted opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-text-primary">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{cat.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-md border border-border-muted px-2 py-0.5 font-mono text-[11px] text-text-muted"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

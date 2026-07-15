import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Global component sourcing, bulk procurement, BOM fulfilment, alternative part sourcing, component consultation, supply chain support, long lead-time and obsolete component sourcing.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Sourcing services built around the RFQ."
        description="Eight capabilities that cover a component's path from spec sheet to your production line — engaged individually or as one ongoing sourcing relationship."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-col divide-y divide-border border-y border-border">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <Reveal key={sol.slug} id={sol.slug} delay={(i % 4) * 0.05} className="scroll-mt-24">
                <div className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-6" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display text-xl font-bold tracking-tight text-text-primary">{sol.title}</h2>
                    <p className="max-w-2xl text-text-secondary">{sol.description}</p>
                    <p className="max-w-2xl text-sm leading-relaxed text-text-muted">{sol.detail}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/request-rfq">
                          Request RFQ <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/contact">Talk to Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import Link from "next/link";

import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { TagList } from "@/components/common/tag-list";
import { CtaBand } from "@/components/common/cta-band";
import { Button } from "@/components/ui/button";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "SLT Technology sources electronic components for industrial automation, automotive, medical, telecom, robotics, IoT, EV, renewable energy and defense programmes.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        motif="constellation"
        title="Component sourcing shaped by the application."
        description="A relay for a robotics arm and a relay for a defense programme carry different requirements. We source with that context in mind."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} id={ind.slug} className="scroll-mt-24">
                <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="font-display text-lg font-bold tracking-tight text-text-primary">{ind.name}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{ind.blurb}</p>
                  <TagList label="Component Focus" items={ind.componentFocus} />
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <Button asChild variant="brand" size="sm">
                      <Link href="/request-rfq">Request RFQ</Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/contact">Talk to Sales</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Sourcing for an industry not listed here?"
        description="Our sourcing approach adapts to the application — tell us what you're building."
      />
    </>
  );
}

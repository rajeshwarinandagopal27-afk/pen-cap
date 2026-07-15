import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { qualityPillars } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Quality",
  description:
    "Authenticity verification, incoming inspection, supplier qualification, traceability, packaging standards, ESD handling and secure logistics at SLT Technology.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality is a checkpoint in the order, not an afterthought."
        description="Seven standards apply to every shipment, from a single sample to a production release — checked before a component leaves our custody, not after a failure is reported."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {qualityPillars.map((q, i) => {
            const Icon = q.icon;
            return (
              <Reveal key={q.title} delay={(i % 3) * 0.06} className="bg-surface">
                <div className="flex h-full flex-col gap-3 p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="font-display text-base font-bold tracking-tight text-text-primary">{q.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{q.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Have a quality or documentation requirement?"
        description="Tell us what your programme needs — traceability records, ESD-rated packaging, or inspection reports."
      />
    </>
  );
}

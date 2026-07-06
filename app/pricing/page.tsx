import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { TuitionTable } from "@/components/pricing/tuition-table";
import { TuitionEstimator } from "@/components/pricing/tuition-estimator";
import { ComparisonTable } from "@/components/cards/comparison-table";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { financingOptions, refundPolicy, comparisonRows } from "@/lib/data/pricing";
import { homepageFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Pricing & Financing",
  description:
    "Transparent tuition for every PenCap program — no \"contact us\" pricing. EMI, income-share agreements, and employer sponsorship options, plus our plain-language refund policy.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container-page">
          <span className="eyebrow">Pricing & financing</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            Every price, in one place. No &ldquo;contact us.&rdquo;
          </h1>
          <p className="type-body-lg mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Hidden pricing is a trust-destroying pattern in this category — so here&rsquo;s tuition
            for every program, every financing option, and our refund policy, all up front.
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container-page">
          <Reveal>
            <TuitionTable />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Estimator</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Check what you&rsquo;d actually pay.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-8">
            <TuitionEstimator />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Financing options</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Four ways to pay, every trade-off named.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {financingOptions.map((f) => (
              <Reveal key={f.id}>
                <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
                  <h3 className="type-display-sm text-[var(--color-text-primary)]">{f.name}</h3>
                  <p className="type-body-sm mt-2 text-[var(--color-text-secondary)]">{f.description}</p>
                  <p className="type-body-xs mt-3 text-[var(--color-text-muted)] normal-case tracking-normal">
                    {f.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="refund-policy" className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--risk-success)] bg-[color-mix(in_oklab,var(--risk-success)_8%,transparent)] p-6 lg:p-8">
            <div className="flex items-center gap-2 text-[var(--risk-success)]">
              <ShieldCheck className="size-5" />
              <span className="type-body-sm font-medium normal-case tracking-normal">Refund policy</span>
            </div>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">{refundPolicy.headline}</h2>
            <p className="type-body-md mt-3 text-[var(--color-text-secondary)] reading-measure">{refundPolicy.detail}</p>
            <p className="type-body-xs mt-3 text-[var(--color-text-muted)]">{refundPolicy.processingFee}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The honest comparison</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              PenCap vs. self-study vs. a generic bootcamp.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-8">
            <ComparisonTable rows={comparisonRows} />
          </Reveal>
        </div>
      </section>

      <FaqSection items={homepageFaq} />

      <FinalCtaBand
        title="Now that you've seen the numbers — ready to apply?"
        ctaLabel="Apply Now"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Apply Now" href="/admissions" />
    </>
  );
}

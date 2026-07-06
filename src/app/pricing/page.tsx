import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { programs } from "@/lib/data/programs";
import { financingOptions, guarantee, pricingComparison } from "@/lib/data/pricing";
import { pricingFaq } from "@/lib/data/faq";
import { formatUsd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & financing",
  description:
    "Transparent tuition for every PenCap Institute program, four financing options including an income share agreement, and our placement guarantee.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Transparent tuition. No &ldquo;contact us for pricing.&rdquo;
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Every price below is what you&rsquo;d actually pay — instructor-led sessions, mentor
            time, and Cyber Range access are all included.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <Card key={program.slug} className="flex flex-col gap-3 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{program.shortName}</p>
                <p className="font-mono text-2xl font-medium text-text-primary">{formatUsd(program.priceUsd)}</p>
                <p className="text-sm text-text-secondary">{program.durationWeeks} weeks · {program.format === "cohort" ? "Cohort-based" : "Self-paced"}</p>
                <Link href={`/programs/${program.slug}`} className="mt-auto text-xs font-medium text-accent hover:underline">
                  View program details
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Financing</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Four ways to pay
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {financingOptions.map((option) => (
              <div key={option.title} className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-text-primary">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{option.description}</p>
                <p className="mt-3 font-mono text-xs text-accent">{option.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <div className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-risk-success/30 bg-risk-success/10 p-6 sm:p-8">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-risk-success" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-semibold text-text-primary">{guarantee.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{guarantee.body}</p>
              <p className="mt-3 text-sm font-medium text-text-primary">{guarantee.trialNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Comparison</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            PenCap vs. the alternatives
          </h2>
          <div className="mt-8">
            <ComparisonTable columns={pricingComparison.columns} rows={pricingComparison.rows} />
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
            Financing questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={pricingFaq} idPrefix="pricing-faq" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-semibold text-text-primary">
            See what you&rsquo;d actually pay, based on your financing preference.
          </p>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/admissions">
              Check your eligibility <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

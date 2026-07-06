import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { MethodologyDisclosure } from "@/components/outcomes/methodology-disclosure";
import { BarChart } from "@/components/outcomes/bar-chart";
import { SalaryChart } from "@/components/outcomes/salary-chart";
import { EmployerLogoWall } from "@/components/outcomes/employer-logo-wall";
import { AlumniStoryGrid } from "@/components/outcomes/alumni-story-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { homepageStats } from "@/lib/data/site";
import { placementByProgram, timeToPlacementDistribution, employerBreakdown } from "@/lib/data/outcomes";
import { homepageFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Outcomes — Our Placement Rate, Published in Full",
  description:
    "PenCap's published placement rate, time-to-placement distribution, salary data, and full audit methodology — the numbers behind every claim on this site.",
  alternates: { canonical: "/outcomes" },
};

export default function OutcomesPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container-page">
          <span className="eyebrow">Outcomes</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            Our outcomes, published in full.
          </h1>
          <p className="type-body-lg mt-4 max-w-xl text-[var(--color-text-secondary)]">
            {homepageStats[0].value}% of graduates placed within 180 days — here&rsquo;s exactly how
            we calculated that, and every number behind it.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <Reveal>
            <MethodologyDisclosure />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Placement rate by program</h2>
            <div className="mt-6">
              <BarChart
                rows={placementByProgram.map((p) => ({
                  label: p.program,
                  value: p.rate,
                  displayValue: `${p.rate}%`,
                }))}
                max={100}
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Time to placement</h2>
            <p className="type-body-xs text-[var(--color-text-muted)] mt-1 normal-case tracking-normal">
              Share of placed graduates, not just the average — most land inside 90 days.
            </p>
            <div className="mt-6">
              <BarChart
                rows={timeToPlacementDistribution.map((t) => ({
                  label: t.bucket,
                  value: t.percent,
                  displayValue: `${t.percent}%`,
                }))}
                max={35}
                barClassName="bg-[var(--ember-500)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Salary, before and after</h2>
            <p className="type-body-xs text-[var(--color-text-muted)] mt-1 normal-case tracking-normal">
              Median annual compensation, by graduating year.
            </p>
            <div className="mt-6">
              <SalaryChart />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Where alumni land</h2>
            <div className="mt-6">
              <BarChart
                rows={employerBreakdown.map((e) => ({
                  label: e.type,
                  value: e.percent,
                  displayValue: `${e.percent}%`,
                }))}
                max={40}
                barClassName="bg-[var(--risk-success)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Hiring partners</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              210+ employers have hired PenCap alumni.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-10">
            <EmployerLogoWall />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Alumni stories</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Find someone who started where you are.
            </h2>
          </Reveal>
          <div className="mt-10">
            <AlumniStoryGrid />
          </div>
        </div>
      </section>

      <FaqSection items={homepageFaq.slice(3, 8)} title="Questions about our numbers" />

      <FinalCtaBand
        title="See if you qualify."
        ctaLabel="Check your eligibility"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Check your eligibility" href="/admissions" />
    </>
  );
}

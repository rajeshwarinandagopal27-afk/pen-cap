import type { Metadata } from "next";
import { FileCheck2 } from "lucide-react";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { StatTile } from "@/components/marketing/stat-tile";
import { Reveal, RevealGroup } from "@/components/marketing/reveal";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { siteStats, methodology } from "@/lib/data/stats";
import { programs } from "@/lib/data/programs";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "PenCap Institute's full placement statistics, published methodology, and alumni outcomes by program.",
  alternates: { canonical: "/outcomes" },
};

export default function OutcomesPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Outcomes</SectionEyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Our outcomes, published in full.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Every number below comes with the method used to calculate it. If a bootcamp
            won&rsquo;t show you that, ask why.
          </p>

          <RevealGroup className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            <Reveal><StatTile value={siteStats.placementRate.value} suffix={siteStats.placementRate.suffix} label={siteStats.placementRate.label} /></Reveal>
            <Reveal delay={0.05}><StatTile value={siteStats.medianTimeToPlacement.value} suffix={siteStats.medianTimeToPlacement.suffix} label={siteStats.medianTimeToPlacement.label} /></Reveal>
            <Reveal delay={0.1}><StatTile value={siteStats.avgSalaryLift.value} suffix={siteStats.avgSalaryLift.suffix} label={siteStats.avgSalaryLift.label} /></Reveal>
            <Reveal delay={0.15}><StatTile value={siteStats.alumniCount.value} suffix={siteStats.alumniCount.suffix} label={siteStats.alumniCount.label} /></Reveal>
            <Reveal delay={0.2}><StatTile value={siteStats.mentorRatio.value} prefix={siteStats.mentorRatio.prefix} label={siteStats.mentorRatio.label} /></Reveal>
            <Reveal delay={0.25}><StatTile value={siteStats.facultyCves.value} label={siteStats.facultyCves.label} /></Reveal>
          </RevealGroup>
        </div>
      </section>

      <section id="methodology" className="scroll-mt-24 border-b border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <div className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8">
            <FileCheck2 className="mt-1 size-6 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-semibold text-text-primary">Methodology</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{methodology.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{methodology.sampleSize}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{methodology.excluded}</p>
              <p className="mt-3 text-sm font-medium text-text-primary">{methodology.auditNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>By program</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
            Outcomes by program
          </h2>
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program</TableHead>
                  <TableHead>Outcome rate</TableHead>
                  <TableHead>Cohort size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {programs.map((program) => (
                  <TableRow key={program.slug}>
                    <TableCell className="font-medium text-text-primary">{program.name}</TableCell>
                    <TableCell className="font-mono">
                      {program.outcomeStat} <span className="text-text-muted">{program.outcomeStatLabel}</span>
                    </TableCell>
                    <TableCell>{program.totalSeats} seats / cohort</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-text-muted">
            Alumni now working at
          </p>
          <EmployerStrip />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Alumni stories</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Every story below is a real name and a real employer.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

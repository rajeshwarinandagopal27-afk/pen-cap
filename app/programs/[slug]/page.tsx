import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurriculumTimeline } from "@/components/cards/curriculum-timeline";
import { StatTile } from "@/components/cards/stat-tile";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FacultyCard } from "@/components/cards/faculty-card";
import { ComparisonTable } from "@/components/cards/comparison-table";
import { ProgramChecklist } from "@/components/programs/program-checklist";
import { DownloadSyllabusDialog } from "@/components/programs/download-syllabus-dialog";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { programs, getProgramBySlug } from "@/lib/data/programs";
import { getFacultyForProgram } from "@/lib/data/faculty";
import { getTestimonialsForProgram } from "@/lib/data/testimonials";
import { homepageFaq } from "@/lib/data/faq";
import { comparisonRows } from "@/lib/data/pricing";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  return {
    title: program.name,
    description: `${program.tagline} ${program.outcomeStat} ${program.outcomeLabel}. ${program.durationWeeks}-week ${program.format.join("/").toLowerCase()} program at PenCap Institute of Excellence, Chennai.`,
    alternates: { canonical: `/programs/${program.slug}` },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const facultyForProgram = getFacultyForProgram(program.slug);
  const testimonialsForProgram = getTestimonialsForProgram(program.slug);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "PenCap Institute of Excellence",
      sameAs: "https://www.pencap.in",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: program.format.join(", "),
      courseWorkload: `PT${program.durationWeeks}W`,
    },
    offers: {
      "@type": "Offer",
      price: program.tuition,
      priceCurrency: program.tuitionCurrency,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container-page">
          <span className="eyebrow">{program.category}</span>
          <h1 className="type-display-xl mt-3 max-w-3xl text-[var(--color-text-primary)]">
            {program.name}
          </h1>
          <p className="type-body-xl mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            {program.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="type-mono-sm text-[var(--color-accent)]">
              {program.outcomeStat}{" "}
              <span className="type-body-sm text-[var(--color-text-secondary)] normal-case tracking-normal">
                {program.outcomeLabel.replace(/^\d+%\s*/, "")}
              </span>
            </p>
            <span className="type-body-sm text-[var(--color-text-muted)]">
              {program.durationWeeks} weeks · {program.format.join(" / ")}
            </span>
            <span className="type-body-sm text-[var(--color-text-muted)]">
              Next cohort {program.nextCohort}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/admissions">
                Apply to this program <ArrowRight />
              </Link>
            </Button>
            <DownloadSyllabusDialog programName={program.name} />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="type-body-lg text-[var(--color-text-secondary)] reading-measure">
              {program.description}
            </p>

            <Tabs defaultValue="curriculum" className="mt-12">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="tuition">Tuition & Financing</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="pt-2">
                <CurriculumTimeline modules={program.curriculum} />
              </TabsContent>

              <TabsContent value="outcomes" className="pt-2">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <StatTile value={parseInt(program.outcomeStat)} suffix="%" label={program.outcomeLabel} />
                  <StatTile value={program.totalSeats} label="Total seats this cohort" />
                  <StatTile value={program.seatsRemaining} label="Seats remaining" />
                </div>
                {testimonialsForProgram.length > 0 && (
                  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {testimonialsForProgram.map((t) => (
                      <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="faculty" className="pt-2">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {facultyForProgram.map((person) => (
                    <FacultyCard key={person.id} person={person} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tuition" className="pt-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="type-mono-md text-3xl text-[var(--color-text-primary)]">
                      ₹{program.tuition.toLocaleString("en-IN")}
                    </span>
                    <span className="type-body-sm text-[var(--color-text-muted)]">
                      or from ₹{program.emiFrom.toLocaleString("en-IN")}/mo on EMI
                    </span>
                  </div>
                  <p className="type-body-md text-[var(--color-text-secondary)] reading-measure">
                    Includes exam vouchers, full Cyber Range access, and 12 months of career
                    services past graduation. Full financing options, including income-share
                    eligibility, are on our{" "}
                    <Link href="/pricing" className="text-[var(--color-accent)] underline underline-offset-4">
                      Pricing & Financing page
                    </Link>
                    .
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 border-t border-[var(--color-border)] pt-12">
              <ProgramChecklist idealFor={program.idealFor} notIdealFor={program.notIdealFor} />
            </div>

            <div className="mt-16 border-t border-[var(--color-border)] pt-12">
              <h3 className="type-display-sm text-[var(--color-text-primary)]">
                {program.name} vs. the alternatives
              </h3>
              <div className="mt-6">
                <ComparisonTable rows={comparisonRows} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div>
                <p className="type-body-xs text-[var(--color-text-muted)]">Tuition</p>
                <p className="type-mono-md text-2xl text-[var(--color-text-primary)] mt-1">
                  ₹{program.tuition.toLocaleString("en-IN")}
                </p>
                <p className="type-body-xs text-[var(--color-text-muted)] mt-1">
                  from ₹{program.emiFrom.toLocaleString("en-IN")}/mo
                </p>
              </div>
              <div className="border-t border-[var(--color-border-muted)] pt-4">
                <p className="type-body-xs text-[var(--color-text-muted)]">Next cohort</p>
                <p className="type-body-md text-[var(--color-text-primary)] mt-1">{program.nextCohort}</p>
                <p className="type-mono-sm text-[var(--color-urgency)] mt-1">
                  {program.seatsRemaining} of {program.totalSeats} seats remaining
                </p>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/admissions">
                  Apply to this program <ArrowRight />
                </Link>
              </Button>
              <Link
                href="/pricing"
                className="text-center type-body-sm text-[var(--color-accent)] underline underline-offset-4"
              >
                See financing options
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection items={homepageFaq.slice(0, 5)} title={`Questions about the ${program.shortName}`} />

      <FinalCtaBand
        title={`Ready to start the ${program.shortName}?`}
        ctaLabel="Apply to this program"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Apply to this program" href="/admissions" />
    </>
  );
}

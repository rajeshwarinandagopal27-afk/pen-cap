import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { CurriculumTimeline } from "@/components/marketing/curriculum-timeline";
import { FacultyCard } from "@/components/marketing/faculty-card";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import { JsonLd } from "@/components/json-ld";
import { getAllProgramSlugs, getProgramBySlug, programs } from "@/lib/data/programs";
import { getFacultyForProgram } from "@/lib/data/faculty";
import { getTestimonialsForProgram } from "@/lib/data/testimonials";
import { homeFaq } from "@/lib/data/faq";
import { formatUsd } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.description,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: { title: program.name, description: program.tagline },
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const instructors = getFacultyForProgram(program.slug);
  const testimonials = getTestimonialsForProgram(program.slug);

  return (
    <div className="pb-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: program.name,
          description: program.description,
          provider: {
            "@type": "EducationalOrganization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: program.format === "cohort" ? "blended" : "online",
            startDate: program.nextCohort,
            courseWorkload: `PT${program.durationWeeks}W`,
          },
          offers: {
            "@type": "Offer",
            price: program.priceUsd,
            priceCurrency: "USD",
            url: `${siteConfig.url}/programs/${program.slug}`,
          },
        }}
      />
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <SectionEyebrow>
              {program.category === "offensive" && "Offensive Security"}
              {program.category === "defensive" && "Defensive Security"}
              {program.category === "cloud" && "Cloud Security"}
              {program.category === "advanced" && "Advanced Specialization"}
            </SectionEyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              {program.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">{program.tagline}</p>
            <p className="mt-6 font-mono text-3xl font-medium tabular-nums text-text-primary">
              {program.outcomeStat}{" "}
              <span className="font-sans text-base font-normal text-text-secondary">{program.outcomeStatLabel}</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/admissions">
                  Apply to this program <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={`/contact?program=${program.slug}`}>
                  <Download className="size-4" aria-hidden="true" /> Download syllabus
                </Link>
              </Button>
            </div>
          </div>

          <aside className="hidden h-fit rounded-[var(--radius-lg)] border border-border bg-surface p-6 lg:sticky lg:top-24 lg:block">
            <p className="font-mono text-2xl font-medium text-text-primary">{formatUsd(program.priceUsd)}</p>
            <p className="mt-1 text-sm text-text-secondary">
              {program.format === "cohort" ? "Cohort-based" : "Self-paced"} · {program.durationWeeks} weeks
            </p>
            <dl className="mt-5 flex flex-col gap-3 border-t border-border-muted pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">Next cohort</dt>
                <dd className="font-medium text-text-primary">{program.nextCohort}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">Seats remaining</dt>
                <dd className="font-medium text-text-primary">{program.seatsRemaining} of {program.totalSeats}</dd>
              </div>
            </dl>
            <Button asChild size="lg" className="mt-6 w-full">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Link href="/pricing" className="mt-3 block text-center text-xs font-medium text-accent hover:underline">
              See financing options
            </Link>
          </aside>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Tabs defaultValue="curriculum">
          <TabsList>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="fit">Is this for you?</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum" className="pt-10">
            <p className="max-w-2xl text-base leading-relaxed text-text-secondary">{program.description}</p>
            <div className="mt-10 max-w-3xl">
              <CurriculumTimeline modules={program.curriculum} />
            </div>
          </TabsContent>

          <TabsContent value="outcomes" className="pt-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-3xl font-medium text-text-primary">{program.outcomeStat}</p>
                <p className="mt-1 text-sm text-text-secondary">{program.outcomeStatLabel}</p>
              </div>
            </div>
            {testimonials.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            )}
            <Link
              href="/outcomes"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              See full outcomes methodology <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </TabsContent>

          <TabsContent value="faculty" className="pt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {instructors.map((member) => (
                <FacultyCard key={member.slug} member={member} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fit" className="pt-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Ideal for</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {program.idealFor.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-text-secondary">
                      <Check className="mt-0.5 size-4 shrink-0 text-risk-success" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 font-display text-lg font-semibold text-text-primary">Prerequisites</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {program.prerequisites.map((item) => (
                    <li key={item} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Probably not for you if</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {program.notIdealFor.map((item) => (
                    <li key={item.text} className="flex gap-2.5 text-sm text-text-secondary">
                      <X className="mt-0.5 size-4 shrink-0 text-text-muted" aria-hidden="true" />
                      <span>
                        {item.text}
                        {item.alternativeSlug && (
                          <>
                            {" — "}
                            <Link
                              href={`/programs/${item.alternativeSlug}`}
                              className="font-medium text-accent hover:underline"
                            >
                              see {programs.find((p) => p.slug === item.alternativeSlug)?.shortName}
                            </Link>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="border-t border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
            About the {program.shortName} program
          </h2>
          <div className="mt-8">
            <FaqAccordion items={homeFaq} idPrefix={`${program.slug}-faq`} />
          </div>
          <div className="mt-10 flex items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <Badge variant="urgency">{program.seatsRemaining} of {program.totalSeats} seats remaining</Badge>
            <p className="text-sm text-text-secondary">Next cohort: {program.nextCohort}</p>
          </div>
        </div>
      </section>

      <StickyMobileCta label="Apply Now" href="/admissions" eyebrow={`${formatUsd(program.priceUsd)} · ${program.nextCohort}`} />
    </div>
  );
}

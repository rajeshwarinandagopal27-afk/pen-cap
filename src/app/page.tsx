import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Crosshair, GraduationCap, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { HeroResolveText } from "@/components/marketing/hero-resolve-text";
import { StatTile } from "@/components/marketing/stat-tile";
import { NetworkMotif } from "@/components/marketing/network-motif";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { ProgramCard } from "@/components/marketing/program-card";
import { CyberRangeTerminal } from "@/components/marketing/cyber-range-terminal";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { FacultyCard } from "@/components/marketing/faculty-card";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { Reveal, RevealGroup } from "@/components/marketing/reveal";
import { StickyMobileCta } from "@/components/marketing/sticky-mobile-cta";
import { JsonLd } from "@/components/json-ld";

import { siteStats } from "@/lib/data/stats";
import { programs } from "@/lib/data/programs";
import { testimonials } from "@/lib/data/testimonials";
import { faculty } from "@/lib/data/faculty";
import { homeFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Cybersecurity training with a published placement rate",
  alternates: { canonical: "/" },
};

const differentiators = [
  {
    icon: Crosshair,
    title: "The Cyber Range",
    claim: "A live-fire practice environment you can try before you apply.",
    stat: "144+ hands-on labs",
  },
  {
    icon: GraduationCap,
    title: "Practitioner faculty",
    claim: "Every instructor still works, or recently worked, the job they teach.",
    stat: `${siteStats.facultyCves.value} CVEs credited to faculty`,
  },
  {
    icon: ShieldCheck,
    title: "Audited outcomes",
    claim: "Our placement rate is published in full, methodology included.",
    stat: `${siteStats.placementRate.value}% placed within 180 days`,
  },
  {
    icon: Users,
    title: "Small cohorts",
    claim: "A mentor ratio low enough that someone actually knows your work.",
    stat: `${siteStats.mentorRatio.prefix}${siteStats.mentorRatio.value} mentor ratio`,
  },
];

const admissionsSteps = [
  { title: "Check eligibility", description: "A 2-minute quiz, no signup required, ends with a personalized program recommendation." },
  { title: "Apply", description: "A short, step-by-step application — never one long form." },
  { title: "Interview", description: "Book an interview slot instantly with an admissions advisor." },
  { title: "Enroll", description: "Choose your financing option and confirm your seat." },
];

const featuredPrograms = programs.slice(0, 3);
const featuredTestimonials = testimonials.slice(0, 3);
const featuredFaculty = faculty.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <section className="relative overflow-hidden border-b border-border-muted">
        <NetworkMotif className="right-[-8rem] top-[-4rem] hidden lg:block" />
        <div className="container-page relative flex flex-col items-start gap-6 py-20 sm:py-28 lg:py-32">
          <SectionEyebrow>Cybersecurity education, verified</SectionEyebrow>
          <h1 className="max-w-3xl font-display text-[clamp(2.75rem,4vw+1rem,5rem)] font-semibold leading-[1.02] tracking-tight text-text-primary text-balance">
            <HeroResolveText text="Trained by operators. Proven by outcomes." />
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-text-secondary">
            Cohort-based offensive security, SOC analyst, and cloud security programs — with a
            published placement rate and a live Cyber Range you can try before you apply.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/admissions">
                Apply Now <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/cyber-range">Try a free challenge</Link>
            </Button>
          </div>
          <div className="mt-6 w-full">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-text-muted">
              Alumni now working at
            </p>
            <EmployerStrip className="justify-start" />
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Reveal>
              <StatTile
                value={siteStats.placementRate.value}
                suffix={siteStats.placementRate.suffix}
                label={siteStats.placementRate.label}
                footnoteHref="/outcomes#methodology"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <StatTile
                value={siteStats.medianTimeToPlacement.value}
                suffix={siteStats.medianTimeToPlacement.suffix}
                label={siteStats.medianTimeToPlacement.label}
                footnoteHref="/outcomes#methodology"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <StatTile
                value={siteStats.avgSalaryLift.value}
                suffix={siteStats.avgSalaryLift.suffix}
                label={siteStats.avgSalaryLift.label}
                footnoteHref="/outcomes#methodology"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <StatTile
                value={siteStats.alumniCount.value}
                suffix={siteStats.alumniCount.suffix}
                label={siteStats.alumniCount.label}
                footnoteHref="/outcomes#methodology"
              />
            </Reveal>
          </RevealGroup>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page">
          <SectionEyebrow>Why PenCap</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Four claims. Four numbers to prove them.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <item.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.claim}</p>
                <p className="mt-3 font-mono text-sm font-medium text-text-primary">{item.stat}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Programs</SectionEyebrow>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Three ways in. One standard.
              </h2>
            </div>
            <Link href="/programs" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              View all programs <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Cyber Range</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Practice before you enroll.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
              The Cyber Range is the same lab environment our students train in — not a marketing
              demo. Solve your first challenge with no signup required.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/cyber-range">
                Start free challenge <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <CyberRangeTerminal />
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page">
          <SectionEyebrow>Outcomes</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Hear it from the people who did it.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Faculty</SectionEyebrow>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Taught by people who still do the job.
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              Meet the full faculty <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredFaculty.map((member) => (
              <FacultyCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page">
          <SectionEyebrow>Admissions</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            How the funnel works.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {admissionsSteps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2">
                <span className="font-mono text-sm font-medium text-accent">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
          <Button asChild size="lg" className="mt-10">
            <Link href="/admissions">
              Start your application <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b border-border-muted bg-surface py-14">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Training your security team?</p>
            <p className="mt-2 font-display text-xl font-semibold text-text-primary">
              Custom cohorts for enterprise teams, with the same faculty and Cyber Range labs.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg" className="shrink-0">
            <Link href="/enterprise">
              Talk to our team <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b border-border-muted py-20 sm:py-24">
        <div className="container-page container-reading">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Before you apply
          </h2>
          <div className="mt-8">
            <FaqAccordion items={homeFaq} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-ink-50 sm:py-24 dark:bg-ink-900">
        <div className="container-page flex flex-col items-start gap-6">
          <Badge variant="urgency">Fall cohort starts September 14 — 12 of 40 seats remaining</Badge>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Proof, not promises. Your application takes ten minutes to start.
          </h2>
          <Button asChild size="lg" className="bg-ink-50 text-ink-950 hover:bg-ink-100">
            <Link href="/admissions">
              Apply Now <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <StickyMobileCta label="Apply Now" href="/admissions" eyebrow="12 of 40 seats remaining" />
    </>
  );
}

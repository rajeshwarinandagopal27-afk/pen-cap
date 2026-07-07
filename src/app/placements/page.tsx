import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { heroStats } from "@/lib/data/stats";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { StatTile } from "@/components/marketing/stat-tile";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { CareerRoadmap } from "@/components/marketing/career-roadmap";
import { JobRolesGrid } from "@/components/marketing/job-roles-grid";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Placements & Career Outcomes",
  description:
    "See PenCap's placement roadmap, hiring partner network, and the cybersecurity job roles and salaries our graduates step into.",
  alternates: { canonical: "/placements" },
};

export default function PlacementsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Placements", url: "/placements" }]} />

      <section className="border-b border-border bg-secondary/30">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24">
          <Reveal>
            <SectionEyebrow>Placements</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              A placement engine, not just a training program
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              92% of our eligible graduates receive an offer within 6 months, backed by a dedicated
              career services team and a 40+ hiring partner network across Chennai and beyond.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <StatTile key={stat.label} {...stat} delay={index * 0.05} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Career Roadmap</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              From enrollment to offer letter
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <CareerRoadmap />
        </div>
      </section>

      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Hiring Partners</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Trusted by 40+ hiring companies
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-12">
            <EmployerStrip />
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Job Roles</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Where our graduates land
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <JobRolesGrid />
        </div>
      </section>

      <TestimonialsSection limit={3} />

      <section className="container-px mx-auto max-w-5xl py-20">
        <Reveal className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Your next job is closer than you think
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Talk to our career services team about which program maps to the roles you want.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact?intent=consultation">
                Book Free Career Consultation
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/courses">Explore Programs</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

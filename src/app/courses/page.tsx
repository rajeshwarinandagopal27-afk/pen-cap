import type { Metadata } from "next";

import { programs } from "@/lib/data/programs";
import { ProgramCard } from "@/components/marketing/program-card";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Cybersecurity Courses in Chennai",
  description:
    "Explore PenCap's CEH v13 AI, SOC Analyst, and Master Program tracks — compare duration, outcomes, certifications and career paths.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }]} />
      <section className="container-px mx-auto max-w-7xl py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Courses</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Cybersecurity programs built around outcomes
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Every track combines live labs, mentor feedback and certification prep. Pick the
              path that matches your background and timeline.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.slug} program={program} delay={index * 0.1} />
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Compare programs</h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <ComparisonTable />
          </Reveal>
        </div>
      </section>
    </>
  );
}

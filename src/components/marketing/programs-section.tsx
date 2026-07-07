import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { programs } from "@/lib/data/programs";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/marketing/program-card";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";

export function ProgramsSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionEyebrow>Programs</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Choose your path into cybersecurity
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted-foreground">
            Three focused tracks — offensive security, defensive operations, or the complete
            career transformation — each built around live labs and mentor-led practice.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {programs.map((program, index) => (
          <ProgramCard key={program.slug} program={program} delay={index * 0.1} />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Button asChild variant="ghost" size="lg">
          <Link href="/courses">
            Compare all programs
            <ArrowRightIcon />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}

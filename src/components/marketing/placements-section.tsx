import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { EmployerStrip } from "@/components/marketing/employer-strip";
import { JobRolesGrid } from "@/components/marketing/job-roles-grid";

export function PlacementsSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionEyebrow>Placements</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Your career, backed by a 40+ hiring partner network
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <EmployerStrip />
      </Reveal>

      <div className="mt-14">
        <JobRolesGrid />
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Button asChild variant="ghost" size="lg">
          <Link href="/placements">
            See the full placement roadmap
            <ArrowRightIcon />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}

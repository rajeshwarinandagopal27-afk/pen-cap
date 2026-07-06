import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { currentCohort } from "@/lib/data/site";

interface FinalCtaBandProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  showUrgency?: boolean;
}

function FinalCtaBand({ title, description, ctaLabel, ctaHref, showUrgency = true }: FinalCtaBandProps) {
  return (
    <section className="bg-[var(--color-text-primary)] py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="type-display-xl max-w-2xl text-[var(--color-canvas)]">{title}</h2>
          {description && (
            <p className="type-body-lg max-w-xl text-[var(--color-canvas)]/70">{description}</p>
          )}
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-canvas)] text-[var(--color-text-primary)] hover:bg-[var(--color-canvas)]/90"
          >
            <Link href={ctaHref}>
              {ctaLabel} <ArrowRight />
            </Link>
          </Button>
          {showUrgency && (
            <p className="type-mono-sm text-[var(--ember-400)]">
              {currentCohort.program} starts {currentCohort.startDate} — {currentCohort.seatsRemaining} of{" "}
              {currentCohort.totalSeats} seats remaining
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export { FinalCtaBand };

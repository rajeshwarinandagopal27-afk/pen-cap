import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Program } from "@/lib/data/programs";

function OnboardingStep({ program, fullName }: { program: Program; fullName: string }) {
  const firstName = fullName.split(" ")[0] || "there";

  return (
    <div className="mx-auto w-full max-w-xl text-center">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--risk-success)_16%,transparent)]">
        <CheckCircle2 className="size-8 text-[var(--risk-success)]" />
      </div>
      <h1 className="type-display-lg mt-6 text-[var(--color-text-primary)]">
        You&rsquo;re in, {firstName}.
      </h1>
      <p className="type-body-lg mt-4 text-[var(--color-text-secondary)]">
        Your seat in the {program.nextCohort} {program.name} cohort is confirmed. Here&rsquo;s what
        happens next:
      </p>

      <ul className="mt-8 flex flex-col gap-4 text-left">
        <li className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
          <span className="type-mono-sm text-[var(--color-accent)] mt-0.5">01</span>
          A welcome email with your student portal login arrives within the hour.
        </li>
        <li className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
          <span className="type-mono-sm text-[var(--color-accent)] mt-0.5">02</span>
          A calendar invite for cohort orientation, one week before {program.nextCohort}.
        </li>
        <li className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
          <span className="type-mono-sm text-[var(--color-accent)] mt-0.5">03</span>
          An introduction to your cohort&rsquo;s private community channel — most learners say this
          is where they make the connections that keep them accountable.
        </li>
        <li className="flex items-start gap-3 type-body-md text-[var(--color-text-secondary)]">
          <span className="type-mono-sm text-[var(--color-accent)] mt-0.5">04</span>
          Full, free access to the PenCap Cyber Range, so you can start practicing before day one.
        </li>
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="/cyber-range">Start practicing now</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
}

export { OnboardingStep };

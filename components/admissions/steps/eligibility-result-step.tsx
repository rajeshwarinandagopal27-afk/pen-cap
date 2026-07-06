"use client";

import { CheckCircle2 } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { Badge } from "@/components/ui/badge";
import { getRecommendedProgram } from "@/lib/admissions/recommend-program";
import type { EligibilityValues } from "@/lib/validations/admissions";

function EligibilityResultStep({
  eligibility,
  onNext,
  onBack,
}: {
  eligibility: EligibilityValues;
  onNext: () => void;
  onBack: () => void;
}) {
  const { program, fitNote } = getRecommendedProgram(eligibility);

  return (
    <StepShell eyebrow="Your recommendation" title="Here's where we'd start.">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-accent)] bg-[var(--color-accent-fill)] p-6">
        <div className="flex items-center gap-2 text-[var(--color-accent)]">
          <CheckCircle2 className="size-5" />
          <span className="type-body-sm font-medium normal-case tracking-normal">Recommended program</span>
        </div>
        <h2 className="type-display-md mt-3 text-[var(--color-text-primary)]">{program.name}</h2>
        <p className="type-body-md mt-3 text-[var(--color-text-secondary)]">{fitNote}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge variant="accent">{program.outcomeStat} placed within 180 days</Badge>
          <span className="type-body-sm text-[var(--color-text-muted)]">
            {program.durationWeeks} weeks · {program.format.join(" / ")}
          </span>
        </div>
      </div>

      <p className="mt-6 type-body-sm text-[var(--color-text-muted)]">
        This is a starting recommendation, not a final placement — you can change your target
        program on the next screen, and admissions will revisit this with you again before your
        interview.
      </p>

      <StepFooter onBack={onBack} onContinue={onNext} continueType="button" continueLabel="Continue to application" />
    </StepShell>
  );
}

export { EligibilityResultStep };

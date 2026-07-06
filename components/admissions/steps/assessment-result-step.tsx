"use client";

import { CheckCircle2 } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";

function AssessmentResultStep({
  score,
  total,
  onNext,
  onBack,
}: {
  score: number;
  total: number;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <StepShell eyebrow="Assessment complete" title={`You got ${score} of ${total}.`}>
      <div className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--risk-success)]" />
        <p className="type-body-md text-[var(--color-text-secondary)]">
          This isn&rsquo;t pass/fail — it helps faculty calibrate your first two weeks correctly.
          78% of applicants who complete this step go on to enroll, so you&rsquo;re nearly there.
        </p>
      </div>

      <StepFooter onBack={onBack} continueType="button" onContinue={onNext} continueLabel="Continue to interview" />
    </StepShell>
  );
}

export { AssessmentResultStep };

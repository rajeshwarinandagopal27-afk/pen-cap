"use client";

import { PartyPopper } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { InitialsAvatar } from "@/components/ui/avatar";
import type { Program } from "@/lib/data/programs";
import { enterpriseContact } from "@/lib/data/enterprise";

function DecisionStep({
  program,
  fullName,
  onNext,
}: {
  program: Program;
  fullName: string;
  onNext: () => void;
}) {
  const firstName = fullName.split(" ")[0] || "there";

  return (
    <StepShell eyebrow="Interview scheduled" title="Your interview is booked.">
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
        <div className="flex items-center gap-2 text-[var(--risk-success)]">
          <PartyPopper className="size-5" />
          <span className="type-body-sm font-medium normal-case tracking-normal">Confirmed</span>
        </div>
        <p className="type-body-md mt-3 text-[var(--color-text-secondary)]">
          {firstName}, we&rsquo;ve sent a calendar invite and a short pre-call brief to your email.
          After the call, {enterpriseContact.name.split(" ")[0]}&rsquo;s team will follow up within
          2 business days with a decision — most applicants who reach this stage for the{" "}
          {program.shortName} do move forward.
        </p>
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6">
        <InitialsAvatar name={enterpriseContact.name} initials="MV" size="md" />
        <div>
          <p className="type-body-md text-[var(--color-text-primary)]">
            &ldquo;Looking forward to talking through your goals — come with questions, this call is
            as much for you to evaluate us as it is for us to meet you.&rdquo;
          </p>
          <p className="type-body-xs text-[var(--color-text-muted)] mt-2 normal-case tracking-normal">
            {enterpriseContact.name}, {enterpriseContact.title}
          </p>
        </div>
      </div>

      <p className="mt-6 type-body-sm text-[var(--color-text-muted)]">
        For this demo, we&rsquo;ll continue straight to enrollment options so you can see the full
        flow — in a real application, this step follows your actual interview.
      </p>

      <StepFooter continueType="button" onContinue={onNext} continueLabel="Preview enrollment" />
    </StepShell>
  );
}

export { DecisionStep };

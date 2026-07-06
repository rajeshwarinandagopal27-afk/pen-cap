"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Program } from "@/lib/data/programs";
import { financingOptions } from "@/lib/data/pricing";
import { enrollmentSchema, type EnrollmentValues } from "@/lib/validations/admissions";

function EnrollmentStep({
  program,
  defaultValues,
  onNext,
  onBack,
}: {
  program: Program;
  defaultValues: Partial<EnrollmentValues>;
  onNext: (values: EnrollmentValues) => void;
  onBack: () => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollmentValues>({ resolver: zodResolver(enrollmentSchema), defaultValues });

  const applicableOptions =
    program.slug === "offensive-security-program"
      ? financingOptions
      : financingOptions.filter((f) => f.id !== "isa");

  return (
    <StepShell
      eyebrow="Enrollment"
      title="Choose how you'll pay."
      description={`Confirming your seat in the ${program.nextCohort} cohort of the ${program.name}.`}
    >
      <div className="mb-6 flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
        <span className="type-body-sm text-[var(--color-text-secondary)]">Total tuition</span>
        <span className="type-mono-md text-[var(--color-text-primary)]">
          ₹{program.tuition.toLocaleString("en-IN")}
        </span>
      </div>

      <form onSubmit={handleSubmit(onNext)}>
        <Controller
          control={control}
          name="financingOption"
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              {applicableOptions.map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] p-4 transition-colors has-[[data-state=checked]]:border-[var(--color-accent)] has-[[data-state=checked]]:bg-[var(--color-accent-fill)]"
                >
                  <RadioGroupItem value={opt.id} className="mt-0.5" />
                  <span>
                    <span className="block type-body-md font-medium text-[var(--color-text-primary)]">
                      {opt.name}
                    </span>
                    <span className="block type-body-sm text-[var(--color-text-secondary)] mt-0.5">
                      {opt.description}
                    </span>
                  </span>
                </label>
              ))}
            </RadioGroup>
          )}
        />
        {errors.financingOption && (
          <p className="mt-3 type-body-xs text-[var(--color-risk-critical)]">{errors.financingOption.message}</p>
        )}

        <p className="mt-4 type-body-xs text-[var(--color-text-muted)]">
          Full terms for every option are on the{" "}
          <a href="/pricing" className="text-[var(--color-accent)] underline underline-offset-4">
            Pricing & Financing page
          </a>
          . Withdraw within the first 10% of the cohort for a full refund, minus a processing fee.
        </p>

        <StepFooter onBack={onBack} continueLabel="Confirm enrollment" />
      </form>
    </StepShell>
  );
}

export { EnrollmentStep };

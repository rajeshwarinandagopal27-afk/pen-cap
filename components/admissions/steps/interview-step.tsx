"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { InitialsAvatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { interviewSchema, type InterviewValues } from "@/lib/validations/admissions";
import { enterpriseContact } from "@/lib/data/enterprise";

function buildSlots() {
  const days: { label: string; times: string[] }[] = [];
  const base = new Date();
  const times = ["10:00 AM", "2:30 PM", "5:00 PM"];
  let added = 0;
  let offset = 1;
  while (added < 3) {
    const d = new Date(base);
    d.setDate(base.getDate() + offset);
    offset += 1;
    if (d.getDay() === 0) continue; // skip Sunday
    days.push({
      label: d.toLocaleDateString("en-IN", { weekday: "long", month: "short", day: "numeric" }),
      times,
    });
    added += 1;
  }
  return days;
}

function InterviewStep({
  defaultValues,
  onNext,
  onBack,
}: {
  defaultValues: Partial<InterviewValues>;
  onNext: (values: InterviewValues) => void;
  onBack: () => void;
}) {
  const slots = React.useMemo(buildSlots, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InterviewValues>({ resolver: zodResolver(interviewSchema), defaultValues });

  return (
    <StepShell
      eyebrow="Step 5 of 5 · Interview"
      title="Book a 30-minute call."
      description="Real-time availability — no email back-and-forth. Reschedule anytime from your dashboard."
    >
      <div className="mb-6 flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
        <InitialsAvatar name={enterpriseContact.name} initials="MV" size="sm" />
        <div>
          <p className="type-body-sm font-medium text-[var(--color-text-primary)]">
            You&rsquo;ll speak with {enterpriseContact.name}
          </p>
          <p className="type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
            {enterpriseContact.title} — 30 minutes, covers your goals, program fit, and next steps
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onNext)}>
        <Controller
          control={control}
          name="slot"
          render={({ field }) => (
            <div className="flex flex-col gap-6">
              {slots.map((day) => (
                <div key={day.label}>
                  <p className="type-body-sm font-medium text-[var(--color-text-primary)]">{day.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {day.times.map((time) => {
                      const value = `${day.label} · ${time}`;
                      const active = field.value === value;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => field.onChange(value)}
                          className={cn(
                            "rounded-[var(--radius-sm)] border px-4 py-2.5 type-body-sm transition-colors",
                            active
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-fill)] text-[var(--color-text-primary)]"
                              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]",
                          )}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        />
        {errors.slot && <p className="mt-3 type-body-xs text-[var(--color-risk-critical)]">{errors.slot.message}</p>}

        <StepFooter onBack={onBack} continueLabel="Confirm interview" />
      </form>
    </StepShell>
  );
}

export { InterviewStep };

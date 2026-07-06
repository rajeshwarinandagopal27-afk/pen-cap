"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { eligibilitySchema, type EligibilityValues } from "@/lib/validations/admissions";

const questions: {
  name: keyof Omit<EligibilityValues, "sponsored">;
  label: string;
  options: { value: string; label: string }[];
}[] = [
  {
    name: "experienceLevel",
    label: "How would you describe your current technical background?",
    options: [
      { value: "none", label: "No IT or security background yet" },
      { value: "some-it", label: "Some IT exposure (helpdesk, basic networking, coursework)" },
      { value: "1-3-years", label: "1–3 years in IT, software, or networking" },
      { value: "3-plus-years", label: "3+ years in IT, software, or networking" },
    ],
  },
  {
    name: "careerGoal",
    label: "What kind of security work are you aiming for?",
    options: [
      { value: "offensive", label: "Offensive — penetration testing, red team" },
      { value: "defensive", label: "Defensive — SOC analyst, blue team, network defense" },
      { value: "grc", label: "GRC — governance, risk, and compliance" },
      { value: "cloud", label: "Cloud & DevSecOps" },
      { value: "not-sure", label: "Not sure yet" },
    ],
  },
  {
    name: "timeAvailability",
    label: "How many hours a week can you realistically commit?",
    options: [
      { value: "under-10", label: "Under 10 hours" },
      { value: "10-15", label: "10–15 hours" },
      { value: "15-20", label: "15–20 hours" },
      { value: "20-plus", label: "20+ hours" },
    ],
  },
  {
    name: "targetStart",
    label: "When would you want to start?",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "3-months", label: "Within 3 months" },
      { value: "6-months", label: "Within 6 months" },
      { value: "exploring", label: "Just exploring for now" },
    ],
  },
];

function EligibilityStep({
  defaultValues,
  onNext,
}: {
  defaultValues: Partial<EligibilityValues>;
  onNext: (values: EligibilityValues) => void;
}) {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EligibilityValues>({
    resolver: zodResolver(eligibilitySchema),
    defaultValues: { sponsored: false, ...defaultValues },
  });

  const sponsored = watch("sponsored");

  return (
    <StepShell
      eyebrow="Step 1 of 5 · 2 minutes, no signup"
      title="Let's find your right starting point."
      description="Five quick questions — no essay, no fee, no account required. We'll give you an honest recommendation at the end."
    >
      <form onSubmit={handleSubmit(onNext)}>
        <div className="flex flex-col gap-10">
          {questions.map((q) => (
            <div key={q.name}>
              <Label className="type-body-lg font-medium">{q.label}</Label>
              <Controller
                control={control}
                name={q.name}
                render={({ field }) => (
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="mt-4">
                    {q.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] p-4 transition-colors has-[[data-state=checked]]:border-[var(--color-accent)] has-[[data-state=checked]]:bg-[var(--color-accent-fill)]"
                      >
                        <RadioGroupItem value={opt.value} />
                        <span className="type-body-md text-[var(--color-text-primary)]">{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors[q.name] && (
                <p className="mt-2 type-body-xs text-[var(--color-risk-critical)]">{errors[q.name]?.message}</p>
              )}
            </div>
          ))}

          <label className="flex cursor-pointer items-start gap-3">
            <Checkbox checked={sponsored} onCheckedChange={(v) => setValue("sponsored", v === true)} />
            <span className="type-body-sm text-[var(--color-text-secondary)]">
              My employer is sponsoring this enrollment (skips the skills assessment step).
            </span>
          </label>
        </div>

        <StepFooter continueLabel="See my recommendation" />
      </form>
    </StepShell>
  );
}

export { EligibilityStep };

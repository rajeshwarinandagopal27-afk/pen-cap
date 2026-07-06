"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profileBackgroundSchema, type ProfileBackgroundValues } from "@/lib/validations/admissions";

const roleOptions = [
  { value: "student", label: "Student" },
  { value: "it-professional", label: "IT / software professional" },
  { value: "non-it-professional", label: "Professional in a non-IT field" },
  { value: "career-break", label: "Career break / between roles" },
  { value: "other", label: "Other" },
];

function ProfileBackgroundStep({
  defaultValues,
  onNext,
  onBack,
}: {
  defaultValues: Partial<ProfileBackgroundValues>;
  onNext: (values: ProfileBackgroundValues) => void;
  onBack: () => void;
}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileBackgroundValues>({ resolver: zodResolver(profileBackgroundSchema), defaultValues });

  return (
    <StepShell eyebrow="Step 3 of 5 · Profile" title="Your background." description="Multiple choice, plus optional detail — no essay required.">
      <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-6">
        <div>
          <Label className="type-body-lg font-medium">Which best describes you right now?</Label>
          <Controller
            control={control}
            name="currentRole"
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="mt-4">
                {roleOptions.map((opt) => (
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
          {errors.currentRole && (
            <p className="mt-2 type-body-xs text-[var(--color-risk-critical)]">{errors.currentRole.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="backgroundDetail">Anything else worth knowing? (optional)</Label>
          <Textarea id="backgroundDetail" placeholder="Relevant coursework, projects, certifications…" {...register("backgroundDetail")} />
        </div>

        <StepFooter onBack={onBack} showSaved />
      </form>
    </StepShell>
  );
}

export { ProfileBackgroundStep };

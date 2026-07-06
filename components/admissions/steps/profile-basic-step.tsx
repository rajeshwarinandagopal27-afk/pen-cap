"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { programs } from "@/lib/data/programs";
import { profileBasicSchema, type ProfileBasicValues } from "@/lib/validations/admissions";

function ProfileBasicStep({
  defaultValues,
  onNext,
  onBack,
}: {
  defaultValues: Partial<ProfileBasicValues>;
  onNext: (values: ProfileBasicValues) => void;
  onBack: () => void;
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileBasicValues>({ resolver: zodResolver(profileBasicSchema), defaultValues });

  return (
    <StepShell eyebrow="Step 3 of 5 · Profile" title="The basics.">
      <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="Your name" {...register("fullName")} />
          {errors.fullName && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.fullName.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">City</Label>
          <Input id="location" placeholder="Chennai" {...register("location")} />
          {errors.location && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.location.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label>Target program</Label>
          <Controller
            control={control}
            name="targetProgram"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((p) => (
                    <SelectItem key={p.slug} value={p.slug}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.targetProgram && (
            <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.targetProgram.message}</p>
          )}
        </div>
        <StepFooter onBack={onBack} showSaved />
      </form>
    </StepShell>
  );
}

export { ProfileBasicStep };

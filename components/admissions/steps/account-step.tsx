"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { accountSchema, type AccountValues } from "@/lib/validations/admissions";

function AccountStep({
  defaultValues,
  onNext,
  onBack,
}: {
  defaultValues: Partial<AccountValues>;
  onNext: (values: AccountValues) => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountValues>({ resolver: zodResolver(accountSchema), defaultValues });

  return (
    <StepShell
      eyebrow="Step 2 of 5"
      title="Save your progress."
      description="Just an email — this only exists so you can pick up on another device if you get interrupted. No password, no spam."
    >
      <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="account-email">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <Input id="account-email" type="email" placeholder="you@email.com" className="pl-10" {...register("email")} />
          </div>
          {errors.email && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.email.message}</p>}
        </div>
        <StepFooter onBack={onBack} />
      </form>
    </StepShell>
  );
}

export { AccountStep };

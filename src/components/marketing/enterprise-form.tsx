"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { enterpriseSchema, type EnterpriseInput } from "@/lib/validations";

export function EnterpriseForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnterpriseInput>({ resolver: zodResolver(enterpriseSchema) });

  async function onSubmit(data: EnterpriseInput) {
    const res = await fetch("/api/enterprise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-risk-success/30 bg-risk-success/10 p-8 text-center">
        <CheckCircle2 className="size-8 text-risk-success" aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-text-primary">Request received</p>
        <p className="text-sm text-text-secondary">
          Our enterprise team will reach out within one business day to schedule a call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="ent-name">Full name</Label>
          <Input id="ent-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-xs font-medium text-destructive" role="alert">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ent-email">Work email</Label>
          <Input id="ent-email" type="email" autoComplete="email" aria-invalid={!!errors.workEmail} {...register("workEmail")} />
          {errors.workEmail && <p className="text-xs font-medium text-destructive" role="alert">{errors.workEmail.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="ent-company">Company</Label>
          <Input id="ent-company" autoComplete="organization" aria-invalid={!!errors.company} {...register("company")} />
          {errors.company && <p className="text-xs font-medium text-destructive" role="alert">{errors.company.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ent-team-size">Security team size</Label>
          <Controller
            name="teamSize"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="ent-team-size"><SelectValue placeholder="Select a range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1–10</SelectItem>
                  <SelectItem value="11-50">11–50</SelectItem>
                  <SelectItem value="51-200">51–200</SelectItem>
                  <SelectItem value="201+">201+</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.teamSize && <p className="text-xs font-medium text-destructive" role="alert">{errors.teamSize.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="ent-goals">What are you trying to solve?</Label>
        <Textarea id="ent-goals" rows={4} aria-invalid={!!errors.goals} {...register("goals")} />
        {errors.goals && <p className="text-xs font-medium text-destructive" role="alert">{errors.goals.message}</p>}
      </div>
      <Button type="submit" size="lg" loading={isSubmitting} className="sm:w-fit">
        Talk to our team
      </Button>
    </form>
  );
}

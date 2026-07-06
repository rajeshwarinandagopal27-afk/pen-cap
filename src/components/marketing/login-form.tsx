"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";

export function LoginForm() {
  const [sent, setSent] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterInput) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await res.json();
    if (res.ok && json.ok) setSent(json.message);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-risk-success/30 bg-risk-success/10 p-8 text-center">
        <CheckCircle2 className="size-8 text-risk-success" aria-hidden="true" />
        <p className="text-sm text-text-secondary">{sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-2">
        <Label htmlFor="login-email">Email address</Label>
        <Input id="login-email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <p className="text-xs font-medium text-destructive" role="alert">{errors.email.message}</p>}
      </div>
      <Button type="submit" size="lg" loading={isSubmitting}>
        <Mail className="size-4" aria-hidden="true" /> Email me a sign-in link
      </Button>
    </form>
  );
}

"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterInput) {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("You're subscribed — watch for outcomes reports and cohort dates.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.5" noValidate>
      <label htmlFor="footer-newsletter-email" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Get outcomes reports &amp; cohort dates
      </label>
      <div className="flex gap-2">
        <Input
          id="footer-newsletter-email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className="max-w-xs"
          {...register("email")}
        />
        <Button type="submit" size="md" variant="secondary" loading={isSubmitting} aria-label="Subscribe">
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
      {errors.email && <p className="text-xs font-medium text-destructive" role="alert">{errors.email.message}</p>}
    </form>
  );
}

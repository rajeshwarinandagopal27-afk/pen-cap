"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm({ defaultIntent = "enroll" as ContactInput["intent"], programHint }: { defaultIntent?: ContactInput["intent"]; programHint?: string }) {
  const [submitted, setSubmitted] = React.useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intent: defaultIntent,
      message: programHint ? `I'd like the syllabus for the ${programHint} program.` : "",
    },
  });

  const intent = watch("intent");

  async function onSubmit(data: ContactInput) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.ok) setSubmitted(json.message);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-risk-success/30 bg-risk-success/10 p-8 text-center">
        <CheckCircle2 className="size-8 text-risk-success" aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-text-primary">Message sent</p>
        <p className="text-sm text-text-secondary">{submitted}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <Label>What would you like to talk about?</Label>
        <Controller
          name="intent"
          control={control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid gap-3 sm:grid-cols-2">
              {[
                { value: "enroll", label: "Enrolling as a student" },
                { value: "enterprise", label: "Training my team (enterprise)" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`intent-${option.value}`}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border border-border p-4 transition-colors",
                    "has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-accent-fill"
                  )}
                >
                  <RadioGroupItem value={option.value} id={`intent-${option.value}`} />
                  <span className="text-sm font-medium text-text-primary">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input id="contact-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-xs font-medium text-destructive" role="alert">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">Email address</Label>
          <Input id="contact-email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p className="text-xs font-medium text-destructive" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      {intent === "enterprise" && (
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-company">Company</Label>
          <Input id="contact-company" autoComplete="organization" {...register("company")} />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" rows={5} aria-invalid={!!errors.message} {...register("message")} />
        {errors.message && <p className="text-xs font-medium text-destructive" role="alert">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" loading={isSubmitting} className="sm:w-fit">
        Send message
      </Button>
    </form>
  );
}

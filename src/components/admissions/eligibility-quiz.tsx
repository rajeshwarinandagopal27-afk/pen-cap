"use client";

import * as React from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FunnelProgress } from "@/components/admissions/funnel-progress";
import { eligibilitySchema, type EligibilityInput } from "@/lib/validations";
import { saveDraft, loadDraft, clearDraft } from "@/lib/local-draft";

const DRAFT_KEY = "pencap:eligibility-draft";

const questions: {
  name: keyof EligibilityInput;
  title: string;
  options: { value: string; label: string }[];
}[] = [
  {
    name: "experienceLevel",
    title: "What's your current experience level?",
    options: [
      { value: "none", label: "No IT or security background" },
      { value: "adjacent-it", label: "IT, helpdesk, or a related technical role" },
      { value: "some-security", label: "Some security exposure (certs, self-study, junior role)" },
      { value: "experienced", label: "1+ years working professionally in security" },
    ],
  },
  {
    name: "goal",
    title: "What's your primary goal?",
    options: [
      { value: "offensive", label: "Become a penetration tester / red teamer" },
      { value: "defensive", label: "Work in a security operations center (SOC)" },
      { value: "cloud", label: "Specialize in cloud security" },
      { value: "advance-existing-career", label: "Advance a career I'm already in" },
    ],
  },
  {
    name: "hoursPerWeek",
    title: "How many hours a week can you commit?",
    options: [
      { value: "under-10", label: "Under 10 hours" },
      { value: "10-15", label: "10–15 hours" },
      { value: "15-20", label: "15–20 hours" },
      { value: "20-plus", label: "20+ hours" },
    ],
  },
  {
    name: "targetStart",
    title: "When do you want to start?",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3-months", label: "In 1–3 months" },
      { value: "3-6-months", label: "In 3–6 months" },
      { value: "exploring", label: "Just exploring for now" },
    ],
  },
];

interface RecommendedProgram {
  slug: string;
  name: string;
  tagline: string;
  outcomeStat: string;
  outcomeStatLabel: string;
  durationWeeks: number;
  nextCohort: string;
}

export function EligibilityQuiz() {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<RecommendedProgram | null>(null);

  const { control, watch, handleSubmit, trigger, formState } = useForm<EligibilityInput>({
    resolver: zodResolver(eligibilitySchema),
    defaultValues: loadDraft<EligibilityInput>(DRAFT_KEY) ?? undefined,
  });

  const values = watch();

  React.useEffect(() => {
    saveDraft(DRAFT_KEY, values);
    setSaved(true);
    const t = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values)]);

  async function onSubmit(data: EligibilityInput) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/admissions/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setResult(json.recommendedProgram);
        clearDraft(DRAFT_KEY);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-10 text-risk-success" aria-hidden="true" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">Your recommended program</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text-primary sm:text-3xl">{result.name}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">{result.tagline}</p>
        <p className="mt-4 font-mono text-2xl font-medium text-text-primary">
          {result.outcomeStat}{" "}
          <span className="font-sans text-sm font-normal text-text-secondary">{result.outcomeStatLabel}</span>
        </p>
        <p className="mt-1 text-sm text-text-secondary">
          {result.durationWeeks} weeks · Next cohort {result.nextCohort}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`/admissions/apply?program=${result.slug}`}>
              Continue to application <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/programs/${result.slug}`}>View program details</Link>
          </Button>
        </div>
      </div>
    );
  }

  const question = questions[stepIndex];
  const currentValue = values[question.name];
  const isLastStep = stepIndex === questions.length - 1;

  async function goNext() {
    const valid = await trigger(question.name);
    if (!valid) return;
    if (isLastStep) {
      handleSubmit(onSubmit)();
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-10">
      <FunnelProgress
        steps={["Experience", "Goal", "Time", "Start date"]}
        currentIndex={stepIndex}
        saved={saved}
      />

      <div className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-text-primary">{question.title}</h2>
        <Controller
          key={question.name}
          name={question.name}
          control={control}
          render={({ field }) => (
            <RadioGroup className="mt-6" value={field.value as string | undefined} onValueChange={field.onChange}>
              {question.options.map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`${question.name}-${option.value}`}
                  className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border border-border p-4 transition-colors has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-accent-fill"
                >
                  <RadioGroupItem value={option.value} id={`${question.name}-${option.value}`} />
                  <span className="text-sm font-medium text-text-primary">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          )}
        />
        {formState.errors[question.name] && (
          <p className="mt-2 text-xs font-medium text-destructive" role="alert">{formState.errors[question.name]?.message}</p>
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
          className={stepIndex === 0 ? "invisible" : undefined}
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back
        </Button>
        <Button type="button" size="lg" onClick={goNext} loading={submitting} disabled={!currentValue}>
          {isLastStep ? "See my recommendation" : "Continue"}
          {!isLastStep && <ArrowRight className="size-4" aria-hidden="true" />}
        </Button>
      </div>
    </div>
  );
}

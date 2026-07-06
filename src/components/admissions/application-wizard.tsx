"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FunnelProgress } from "@/components/admissions/funnel-progress";
import { InterviewScheduler } from "@/components/admissions/interview-scheduler";
import { applicationFullSchema, type ApplicationInput } from "@/lib/validations";
import { saveDraft, loadDraft, clearDraft } from "@/lib/local-draft";
import { programs } from "@/lib/data/programs";

const DRAFT_KEY = "pencap:application-draft";
const STEP_LABELS = ["Profile", "Background", "Motivation", "Review"];

const STEP_FIELDS: (keyof ApplicationInput)[][] = [
  ["programSlug", "fullName", "email", "location", "targetCohort"],
  ["currentRole", "background"],
  ["motivation"],
  [],
];

export function ApplicationWizard({ defaultProgramSlug }: { defaultProgramSlug?: string }) {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const [referenceId, setReferenceId] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const draft = loadDraft<ApplicationInput>(DRAFT_KEY);
  const initialProgram = draft?.programSlug ?? defaultProgramSlug ?? programs[0].slug;

  const {
    register,
    watch,
    control,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationFullSchema),
    defaultValues: draft ?? { programSlug: initialProgram },
  });

  const values = watch();

  React.useEffect(() => {
    saveDraft(DRAFT_KEY, values);
    setSaved(true);
    const t = setTimeout(() => setSaved(false), 1500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values)]);

  const selectedProgram = programs.find((p) => p.slug === values.programSlug) ?? programs[0];

  async function onSubmit(data: ApplicationInput) {
    setSubmitError(null);
    const res = await fetch("/api/admissions/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok || !json.ok) {
      setSubmitError("Something went wrong submitting your application. Please try again.");
      return;
    }
    setReferenceId(json.referenceId);
    clearDraft(DRAFT_KEY);
  }

  async function goNext() {
    const fields = STEP_FIELDS[stepIndex];
    const valid = fields.length === 0 || (await trigger(fields));
    if (!valid) return;
    if (stepIndex === STEP_LABELS.length - 1) {
      handleSubmit(onSubmit)();
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  if (referenceId) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 sm:p-12">
        <div className="text-center">
          <CheckCircle2 className="mx-auto size-10 text-risk-success" aria-hidden="true" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">Application received</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Reference {referenceId}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
            We&rsquo;ve emailed you a confirmation. The last step is a short interview with an
            admissions advisor — pick a time below.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-lg">
          <InterviewScheduler />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-10">
      <FunnelProgress steps={STEP_LABELS} currentIndex={stepIndex} saved={saved} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          goNext();
        }}
        className="mt-10"
        noValidate
      >
        {stepIndex === 0 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Your profile</h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="programSlug">Program</Label>
              <Controller
                name="programSlug"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="programSlug"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.slug} value={program.slug}>
                          {program.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
              {errors.fullName && <p className="text-xs font-medium text-destructive" role="alert">{errors.fullName.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
              {errors.email && <p className="text-xs font-medium text-destructive" role="alert">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="location">City &amp; state / country</Label>
              <Input id="location" autoComplete="address-level2" aria-invalid={!!errors.location} {...register("location")} />
              {errors.location && <p className="text-xs font-medium text-destructive" role="alert">{errors.location.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="targetCohort">Target cohort</Label>
              <Controller
                name="targetCohort"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="targetCohort"><SelectValue placeholder="Select a cohort date" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={selectedProgram.nextCohort}>{selectedProgram.nextCohort} (next available)</SelectItem>
                      <SelectItem value="notify-me">Not sure — notify me of future dates</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.targetCohort && <p className="text-xs font-medium text-destructive" role="alert">{errors.targetCohort.message}</p>}
            </div>
          </div>
        )}

        {stepIndex === 1 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Your background</h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="currentRole">Current role or situation</Label>
              <Input
                id="currentRole"
                placeholder="e.g. IT support technician, recent graduate, career changer"
                aria-invalid={!!errors.currentRole}
                {...register("currentRole")}
              />
              {errors.currentRole && <p className="text-xs font-medium text-destructive" role="alert">{errors.currentRole.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="background">Tell us about your technical background</Label>
              <Textarea
                id="background"
                rows={5}
                placeholder="Any IT, coding, or security experience — formal or self-taught."
                aria-invalid={!!errors.background}
                {...register("background")}
              />
              {errors.background && <p className="text-xs font-medium text-destructive" role="alert">{errors.background.message}</p>}
            </div>
          </div>
        )}

        {stepIndex === 2 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Your motivation</h2>
            <div className="flex flex-col gap-2">
              <Label htmlFor="motivation">Why this program, and why now?</Label>
              <Textarea
                id="motivation"
                rows={7}
                placeholder="There's no single right answer — admissions reads every response."
                aria-invalid={!!errors.motivation}
                {...register("motivation")}
              />
              {errors.motivation && <p className="text-xs font-medium text-destructive" role="alert">{errors.motivation.message}</p>}
            </div>
          </div>
        )}

        {stepIndex === 3 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-semibold text-text-primary">Review your application</h2>
            <dl className="flex flex-col divide-y divide-border-muted rounded-[var(--radius-md)] border border-border-muted">
              {[
                ["Program", selectedProgram.name],
                ["Name", values.fullName],
                ["Email", values.email],
                ["Location", values.location],
                ["Target cohort", values.targetCohort],
                ["Current role", values.currentRole],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                  <dt className="text-text-secondary">{label}</dt>
                  <dd className="font-medium text-text-primary">{value || "—"}</dd>
                </div>
              ))}
            </dl>
            {submitError && <p className="text-sm font-medium text-destructive">{submitError}</p>}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
            className={stepIndex === 0 ? "invisible" : undefined}
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back
          </Button>
          <Button type="submit" size="lg" loading={isSubmitting}>
            {stepIndex === STEP_LABELS.length - 1 ? "Submit application" : "Continue"}
            {stepIndex !== STEP_LABELS.length - 1 && <ArrowRight className="size-4" aria-hidden="true" />}
          </Button>
        </div>
      </form>
    </div>
  );
}

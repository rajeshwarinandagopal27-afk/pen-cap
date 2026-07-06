"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mic, Type, Square } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profileMotivationSchema, type ProfileMotivationValues } from "@/lib/validations/admissions";

function VoiceRecorder({ onRecorded }: { onRecorded: (text: string) => void }) {
  const [recording, setRecording] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  function stop() {
    setRecording(false);
    setDone(true);
    onRecorded(
      "[Voice response recorded — " +
        Math.max(seconds, 1) +
        "s. Transcription will be reviewed by admissions alongside your application.]",
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] p-8 text-center">
      {done ? (
        <p className="type-body-md text-[var(--color-text-primary)]">
          Recording saved ({seconds}s). You can re-record if you&rsquo;d like.
        </p>
      ) : (
        <>
          <button
            type="button"
            onClick={() => (recording ? stop() : setRecording(true))}
            className={cn(
              "flex size-16 items-center justify-center rounded-full transition-colors",
              recording ? "bg-[var(--color-urgency)] text-white" : "bg-[var(--color-accent)] text-[var(--ink-950)]",
            )}
            aria-label={recording ? "Stop recording" : "Start recording"}
          >
            {recording ? <Square className="size-5 fill-current" /> : <Mic className="size-6" />}
          </button>
          <p className="type-body-sm text-[var(--color-text-secondary)]">
            {recording ? `Recording… ${seconds}s` : "Tap to record, up to 2 minutes"}
          </p>
        </>
      )}
      {done && (
        <Button type="button" variant="ghost" size="sm" onClick={() => { setDone(false); setSeconds(0); }}>
          Re-record
        </Button>
      )}
    </div>
  );
}

function ProfileMotivationStep({
  defaultValues,
  onNext,
  onBack,
}: {
  defaultValues: Partial<ProfileMotivationValues>;
  onNext: (values: ProfileMotivationValues) => void;
  onBack: () => void;
}) {
  const [mode, setMode] = React.useState<"write" | "record">("write");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileMotivationValues>({ resolver: zodResolver(profileMotivationSchema), defaultValues });

  const value = watch("motivation");

  return (
    <StepShell
      eyebrow="Step 3 of 5 · Profile"
      title="Why security, and why now?"
      description="A couple of sentences is plenty — write it, or record a voice response if that's easier."
    >
      <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Button type="button" variant={mode === "write" ? "secondary" : "ghost"} size="sm" onClick={() => setMode("write")}>
            <Type /> Write
          </Button>
          <Button type="button" variant={mode === "record" ? "secondary" : "ghost"} size="sm" onClick={() => setMode("record")}>
            <Mic /> Record instead
          </Button>
        </div>

        {mode === "write" ? (
          <Textarea
            placeholder="I want to move into security because…"
            rows={5}
            {...register("motivation")}
          />
        ) : (
          <VoiceRecorder onRecorded={(text) => setValue("motivation", text, { shouldValidate: true })} />
        )}

        {mode === "record" && value && (
          <p className="type-body-xs text-[var(--color-text-muted)]">{value}</p>
        )}

        {errors.motivation && <p className="type-body-xs text-[var(--color-risk-critical)]">{errors.motivation.message}</p>}

        <StepFooter onBack={onBack} showSaved />
      </form>
    </StepShell>
  );
}

export { ProfileMotivationStep };

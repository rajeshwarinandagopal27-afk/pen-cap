"use client";

import * as React from "react";
import { FileUp, FileCheck2, X } from "lucide-react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";

function ProfileResumeStep({
  defaultFileName,
  onNext,
  onBack,
}: {
  defaultFileName?: string;
  onNext: (fileName: string | undefined) => void;
  onBack: () => void;
}) {
  const [fileName, setFileName] = React.useState<string | undefined>(defaultFileName);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <StepShell
      eyebrow="Step 3 of 5 · Profile"
      title="Resume or LinkedIn (optional)."
      description="Not required to continue — you can add this later from your dashboard instead."
    >
      <div className="flex flex-col gap-4">
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name)}
        />

        {fileName ? (
          <div className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
            <span className="flex items-center gap-3 type-body-sm text-[var(--color-text-primary)]">
              <FileCheck2 className="size-5 text-[var(--risk-success)]" />
              {fileName}
            </span>
            <button
              type="button"
              onClick={() => setFileName(undefined)}
              aria-label="Remove file"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] p-10 text-center transition-colors hover:border-[var(--color-accent)]"
          >
            <FileUp className="size-6 text-[var(--color-text-muted)]" />
            <span className="type-body-sm text-[var(--color-text-secondary)]">
              Tap to upload a file or take a photo — PDF, DOC, or image
            </span>
          </button>
        )}
      </div>

      <StepFooter
        onBack={onBack}
        continueType="button"
        onContinue={() => onNext(fileName)}
        continueLabel={fileName ? "Continue" : "Skip for now"}
        showSaved={!!fileName}
      />
    </StepShell>
  );
}

export { ProfileResumeStep };

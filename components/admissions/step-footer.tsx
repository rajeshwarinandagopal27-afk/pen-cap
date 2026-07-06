"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface StepFooterProps {
  onBack?: () => void;
  backLabel?: string;
  continueLabel?: string;
  continueType?: "submit" | "button";
  onContinue?: () => void;
  showSaved?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

function StepFooter({
  onBack,
  backLabel = "Back",
  continueLabel = "Continue",
  continueType = "submit",
  onContinue,
  showSaved,
  disabled,
  loading,
}: StepFooterProps) {
  return (
    <div className="mt-10 flex items-center justify-between gap-4">
      <div>
        {onBack && (
          <Button type="button" variant="ghost" onClick={onBack}>
            <ArrowLeft /> {backLabel}
          </Button>
        )}
      </div>
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {showSaved && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="type-body-xs text-[var(--color-text-muted)]"
            >
              Saved
            </motion.span>
          )}
        </AnimatePresence>
        <Button type={continueType} size="lg" onClick={onContinue} disabled={disabled} loading={loading}>
          {continueLabel} <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export { StepFooter };

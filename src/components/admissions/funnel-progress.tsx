"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface FunnelProgressProps {
  steps: string[];
  currentIndex: number;
  saved?: boolean;
}

export function FunnelProgress({ steps, currentIndex, saved }: FunnelProgressProps) {
  return (
    <div>
      <ol className="flex items-center gap-2 sm:gap-3">
        {steps.map((step, index) => {
          const state = index < currentIndex ? "done" : index === currentIndex ? "current" : "upcoming";
          return (
            <li key={step} className="flex flex-1 items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-medium",
                    state === "done" && "bg-accent text-canvas",
                    state === "current" && "border border-accent text-accent",
                    state === "upcoming" && "border border-border text-text-muted"
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {state === "done" ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-medium sm:block",
                    state === "upcoming" ? "text-text-muted" : "text-text-primary"
                  )}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <span
                  className={cn("h-px flex-1", index < currentIndex ? "bg-accent" : "bg-border")}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      <p
        className={cn(
          "mt-3 text-xs text-text-muted transition-opacity duration-300",
          saved ? "opacity-100" : "opacity-0"
        )}
        aria-live="polite"
      >
        Saved
      </p>
    </div>
  );
}

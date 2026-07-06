import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const MACRO_STEPS = ["Eligibility", "Profile", "Assessment", "Interview", "Enroll"];

function ProgressHeader({ currentMacro }: { currentMacro: number }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <ol className="flex items-center">
        {MACRO_STEPS.map((label, i) => {
          const state = i < currentMacro ? "done" : i === currentMacro ? "active" : "upcoming";
          return (
            <li key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full type-body-xs font-medium transition-colors duration-[var(--duration-base)]",
                    state === "done" && "bg-[var(--color-accent)] text-[var(--ink-950)]",
                    state === "active" && "border-2 border-[var(--color-accent)] text-[var(--color-accent)]",
                    state === "upcoming" && "border border-[var(--color-border)] text-[var(--color-text-muted)]",
                  )}
                >
                  {state === "done" ? <Check className="size-3.5" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "hidden type-body-xs whitespace-nowrap normal-case tracking-normal sm:block",
                    state === "upcoming" ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-primary)]",
                  )}
                >
                  {label}
                </span>
              </div>
              {i !== MACRO_STEPS.length - 1 && (
                <span
                  className={cn(
                    "mx-2 h-px flex-1 transition-colors duration-[var(--duration-base)]",
                    i < currentMacro ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export { ProgressHeader, MACRO_STEPS };

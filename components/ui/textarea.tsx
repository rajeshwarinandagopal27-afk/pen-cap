import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-3 type-body-sm text-[var(--color-text-primary)] transition-[border-color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        "placeholder:text-[var(--color-text-muted)]",
        "focus-visible:border-[var(--color-focus-ring)] focus-visible:bg-[var(--color-accent-fill)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-[var(--color-risk-critical)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

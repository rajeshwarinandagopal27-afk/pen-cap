import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 type-body-sm text-[var(--color-text-primary)] transition-[border-color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
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

export { Input };

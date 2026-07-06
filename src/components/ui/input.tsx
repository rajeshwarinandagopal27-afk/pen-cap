import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 text-sm text-text-primary placeholder:text-text-muted transition-[border-color,background-color,box-shadow] duration-150 ease-[var(--ease-standard)] outline-none",
        "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-focus-ring/40",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 py-3 text-sm text-text-primary placeholder:text-text-muted transition-[border-color,box-shadow] duration-150 ease-[var(--ease-standard)] outline-none",
        "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-focus-ring/40",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

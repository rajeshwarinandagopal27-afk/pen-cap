import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-28 w-full rounded-md border border-input bg-surface px-3.5 py-2.5 text-sm text-text-primary shadow-sm transition-[color,box-shadow,border-color] placeholder:text-text-muted focus-visible:outline-none focus-visible:border-ring focus-visible:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent-500)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md border border-input bg-surface px-3.5 py-2 text-sm text-text-primary shadow-sm transition-[color,box-shadow,border-color] placeholder:text-text-muted focus-visible:outline-none focus-visible:border-ring focus-visible:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent-500)_16%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

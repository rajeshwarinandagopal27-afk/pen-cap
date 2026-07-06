import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none w-fit",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface-raised text-text-secondary",
        accent: "border-transparent bg-accent-fill text-accent",
        urgency: "border-transparent bg-urgency-fill text-urgency",
        low: "border-transparent bg-risk-low/12 text-risk-low",
        medium: "border-transparent bg-risk-medium/15 text-risk-medium",
        high: "border-transparent bg-risk-high/12 text-risk-high",
        critical: "border-transparent bg-risk-critical/12 text-risk-critical",
        success: "border-transparent bg-risk-success/12 text-risk-success",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };

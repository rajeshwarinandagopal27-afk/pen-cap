import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[var(--radius-full)] px-2.5 py-1 type-body-xs font-medium normal-case tracking-normal w-fit",
  {
    variants: {
      variant: {
        neutral: "bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
        accent: "bg-[var(--color-accent-fill)] text-[var(--color-accent)]",
        urgency: "bg-[var(--color-urgency-fill)] text-[var(--color-urgency)]",
        success: "bg-[color-mix(in_oklab,var(--color-risk-success)_14%,transparent)] text-[var(--color-risk-success)]",
        critical: "bg-[color-mix(in_oklab,var(--color-risk-critical)_14%,transparent)] text-[var(--color-risk-critical)]",
        high: "bg-[color-mix(in_oklab,var(--color-risk-high)_14%,transparent)] text-[var(--color-risk-high)]",
        medium: "bg-[color-mix(in_oklab,var(--color-risk-medium)_14%,transparent)] text-[var(--color-risk-medium)]",
        low: "bg-[color-mix(in_oklab,var(--color-risk-low)_14%,transparent)] text-[var(--color-risk-low)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] type-body-sm font-medium transition-[transform,box-shadow,background-color,opacity] duration-[var(--duration-fast)] ease-[var(--ease-standard)] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-fg)] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.18)] active:translate-y-0 active:opacity-90",
        secondary:
          "border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:-translate-y-px hover:border-[var(--color-text-secondary)] active:translate-y-0 active:opacity-90",
        ghost:
          "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] active:opacity-90",
        link: "text-[var(--color-accent)] underline underline-offset-4 hover:no-underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-3.5 has-[>svg]:px-3",
        md: "h-11 px-5 has-[>svg]:px-4",
        lg: "h-13 px-7 text-base has-[>svg]:px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin" /> : null}
      {children}
    </button>
  );
}

export { Button, buttonVariants };

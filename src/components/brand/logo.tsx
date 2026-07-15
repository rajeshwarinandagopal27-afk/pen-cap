import { cn } from "@/lib/utils";

/** The Node — SLT's primary symbol. Theme-aware via Tailwind fill/stroke tokens. */
export function NodeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="8 12 116 76"
      role="img"
      aria-hidden="true"
      className={cn("h-7 w-auto", className)}
    >
      <g
        className="stroke-ink-400"
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
      >
        <line x1="16" y1="20" x2="80" y2="50" />
        <line x1="16" y1="50" x2="80" y2="50" />
        <line x1="16" y1="80" x2="80" y2="50" />
      </g>
      <line
        x1="80"
        y1="50"
        x2="112"
        y2="50"
        className="stroke-copper-500 dark:stroke-copper-400"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <circle cx="80" cy="50" r="10" className="fill-copper-500 dark:fill-copper-400" />
    </svg>
  );
}

export function Logo({
  className,
  withDescriptor = false,
}: {
  className?: string;
  withDescriptor?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <NodeMark className="h-6 w-auto sm:h-7" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-text-primary sm:text-xl">
          SL<span className="text-brand">T</span>
        </span>
        {withDescriptor && (
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-text-muted">
            Technology
          </span>
        )}
      </span>
    </span>
  );
}

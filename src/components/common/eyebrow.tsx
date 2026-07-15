import { cn } from "@/lib/utils";

/** Monospaced section label with a copper datum tick — the datasheet register. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-text-muted",
        className,
      )}
    >
      <span className="h-px w-6 bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}

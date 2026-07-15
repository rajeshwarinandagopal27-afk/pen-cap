import { cn } from "@/lib/utils";

export function TagList({
  label,
  items,
  className,
}: {
  label: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border-muted bg-surface-sunken/40 px-2.5 py-1 text-xs text-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

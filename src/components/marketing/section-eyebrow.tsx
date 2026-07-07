import { cn } from "@/lib/utils";

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-royal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal-600 dark:text-royal-400",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-royal-500" />
      {children}
    </span>
  );
}

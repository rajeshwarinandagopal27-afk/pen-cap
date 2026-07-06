import { cn } from "@/lib/utils";

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.08em] text-accent", className)}>{children}</p>
  );
}

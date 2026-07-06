import { employerLogos } from "@/lib/data/stats";
import { cn } from "@/lib/utils";

export function EmployerStrip({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-10 gap-y-4", className)}>
      {employerLogos.map((name) => (
        <span
          key={name}
          className="font-display text-sm font-medium tracking-tight text-text-muted grayscale transition-colors hover:text-text-secondary"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

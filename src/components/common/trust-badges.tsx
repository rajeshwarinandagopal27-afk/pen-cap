import { Check } from "lucide-react";

import { trustIndicators } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TrustBadges({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {trustIndicators.map((label) => (
        <li
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary"
        >
          <Check className="size-3.5 text-brand" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}

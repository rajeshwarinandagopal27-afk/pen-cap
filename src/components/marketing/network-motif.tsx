import { cn } from "@/lib/utils";

/**
 * The one signature background motif from /docs/design/01-brand-strategy.md —
 * a fine-line isometric node/edge graph. Used sparingly: hero and section
 * dividers only, never as full-bleed decoration on every page.
 */
export function NetworkMotif({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute select-none opacity-[0.07] dark:opacity-[0.12]", className)}
      width="820"
      height="520"
      viewBox="0 0 820 520"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path d="M40 460 L180 380 L340 420 L480 300 L640 340 L780 220" />
        <path d="M180 380 L220 220 L340 420" />
        <path d="M480 300 L440 120 L640 340" />
        <path d="M220 220 L440 120 L640 60 L780 220" />
        <path d="M40 460 L100 260 L220 220" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="460" r="5" />
        <circle cx="180" cy="380" r="5" />
        <circle cx="340" cy="420" r="5" />
        <circle cx="480" cy="300" r="6" />
        <circle cx="640" cy="340" r="5" />
        <circle cx="780" cy="220" r="5" />
        <circle cx="220" cy="220" r="5" />
        <circle cx="440" cy="120" r="5" />
        <circle cx="640" cy="60" r="5" />
        <circle cx="100" cy="260" r="4" />
      </g>
    </svg>
  );
}

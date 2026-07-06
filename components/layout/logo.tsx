import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-7", className)} aria-hidden="true">
      <path
        d="M16 2 28 8v10c0 8-5.5 10.5-12 12C9.5 28.5 4 26 4 18V8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M11 16.5 14.5 20 21.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus-ring)] rounded-sm",
        className,
      )}
      aria-label="PenCap Institute of Excellence, home"
    >
      <LogoMark className="text-[var(--color-accent)]" />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="type-display-sm font-semibold tracking-tight">PenCap</span>
          <span className="type-body-xs text-[var(--color-text-muted)] tracking-normal normal-case">
            Institute of Excellence
          </span>
        </span>
      )}
    </Link>
  );
}

export { Logo, LogoMark };

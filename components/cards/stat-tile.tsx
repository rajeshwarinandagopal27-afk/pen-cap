import Link from "next/link";

import { CountUp } from "@/components/motion/count-up";
import { cn } from "@/lib/utils";

interface StatTileProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  footnote?: string;
  footnoteHref?: string;
  className?: string;
}

function StatTile({ value, suffix, prefix, label, footnote, footnoteHref, className }: StatTileProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="type-mono-md text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-primary)]">
        <CountUp value={value} suffix={suffix} prefix={prefix} />
      </p>
      <p className="type-body-sm text-[var(--color-text-secondary)]">{label}</p>
      {footnote && (
        <Link
          href={footnoteHref ?? "/outcomes"}
          className="type-body-xs text-[var(--color-accent)] underline underline-offset-4 normal-case tracking-normal w-fit"
        >
          {footnote}
        </Link>
      )}
    </div>
  );
}

export { StatTile };

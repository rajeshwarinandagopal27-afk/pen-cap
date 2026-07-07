"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { programs } from "@/lib/data/programs";
import { cyberRangeCategories } from "@/lib/data/cyber-range";

export function ProgramsMenu({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn("text-sm font-medium text-text-secondary transition-colors hover:text-text-primary", triggerClassName)}
      >
        Programs
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-dropdown w-[42rem] -translate-x-1/2 pt-4 transition-all duration-150 ease-[var(--ease-standard)]",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="grid grid-cols-5 gap-6 rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[0_12px_32px_rgba(16,21,26,0.12)]">
          <div className="col-span-3 flex flex-col gap-1">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-4 rounded-[var(--radius-sm)] px-3 py-2.5 transition-colors hover:bg-surface-raised"
              >
                <span>
                  <span className="block text-sm font-medium text-text-primary">{program.name}</span>
                  <span className="mt-0.5 block font-mono text-xs text-text-muted">
                    {program.outcomeStat} placed within 180 days
                  </span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-text-muted opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
          <div className="col-span-2 rounded-[var(--radius-md)] border border-border-muted bg-surface-raised p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Cyber Range</p>
            <p className="mt-2 text-sm font-medium text-text-primary">
              Try a free challenge before you apply
            </p>
            <p className="mt-1.5 text-xs text-text-secondary">
              {cyberRangeCategories.length} categories, {cyberRangeCategories.reduce((sum, c) => sum + c.challengeCount, 0)}+ hands-on labs. No signup required to start.
            </p>
            <Link
              href="/cyber-range"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
            >
              Start free challenge <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

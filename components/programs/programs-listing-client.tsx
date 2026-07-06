"use client";

import * as React from "react";
import { LayoutGrid, Rows3 } from "lucide-react";

import { ProgramCard } from "@/components/cards/program-card";
import { ProgramsComparisonTable } from "@/components/programs/programs-comparison-table";
import { RevealGroup } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { programs, type Program, type ProgramFocus, type ProgramLevel } from "@/lib/data/programs";

const levels: ProgramLevel[] = ["Beginner-friendly", "Intermediate", "Advanced"];
const focuses: ProgramFocus[] = ["Offensive", "Defensive", "GRC", "Cloud"];
const formats = ["Cohort", "Self-paced"] as const;

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[var(--radius-full)] border px-3.5 py-2 type-body-xs font-medium normal-case tracking-normal transition-colors duration-[var(--duration-fast)]",
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent-fill)] text-[var(--color-accent)]"
          : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
      )}
    >
      {children}
    </button>
  );
}

function ProgramsListingClient() {
  const [level, setLevel] = React.useState<ProgramLevel | null>(null);
  const [focus, setFocus] = React.useState<ProgramFocus | null>(null);
  const [format, setFormat] = React.useState<(typeof formats)[number] | null>(null);
  const [compareMode, setCompareMode] = React.useState(false);

  const filtered = React.useMemo(() => {
    return programs.filter((p: Program) => {
      if (level && p.level !== level) return false;
      if (focus && p.focus !== focus) return false;
      if (format && !p.format.includes(format)) return false;
      return true;
    });
  }, [level, focus, format]);

  return (
    <div>
      <div className="sticky top-20 z-[90] -mx-6 border-b border-[var(--color-border)] bg-[var(--color-canvas)]/95 px-6 py-4 backdrop-blur-md md:-mx-8 md:px-8 lg:top-24 lg:-mx-16 lg:px-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="type-body-xs text-[var(--color-text-muted)] mr-1">Level</span>
            {levels.map((l) => (
              <FilterChip key={l} active={level === l} onClick={() => setLevel(level === l ? null : l)}>
                {l}
              </FilterChip>
            ))}
            <span className="type-body-xs text-[var(--color-text-muted)] ml-3 mr-1">Focus</span>
            {focuses.map((f) => (
              <FilterChip key={f} active={focus === f} onClick={() => setFocus(focus === f ? null : f)}>
                {f}
              </FilterChip>
            ))}
            <span className="type-body-xs text-[var(--color-text-muted)] ml-3 mr-1">Format</span>
            {formats.map((f) => (
              <FilterChip key={f} active={format === f} onClick={() => setFormat(format === f ? null : f)}>
                {f}
              </FilterChip>
            ))}
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCompareMode((v) => !v)}
            className="shrink-0"
          >
            {compareMode ? <LayoutGrid /> : <Rows3 />}
            {compareMode ? "Show cards" : "Compare programs"}
          </Button>
        </div>
      </div>

      <div className="pt-10">
        <p className="type-body-sm text-[var(--color-text-muted)] mb-6">
          {filtered.length} of {programs.length} programs
        </p>

        {filtered.length === 0 ? (
          <p className="type-body-md text-[var(--color-text-secondary)] py-12 text-center">
            No programs match those filters yet — try clearing one.
          </p>
        ) : compareMode ? (
          <ProgramsComparisonTable programs={filtered} />
        ) : (
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </RevealGroup>
        )}
      </div>
    </div>
  );
}

export { ProgramsListingClient };

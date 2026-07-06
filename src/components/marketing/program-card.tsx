import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Program } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatUsd } from "@/lib/utils";

const levelVariant = {
  beginner: "low",
  intermediate: "medium",
  advanced: "high",
} as const;

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_4px_12px_rgba(16,21,26,0.08)]">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {program.category === "offensive" && "Offensive Security"}
          {program.category === "defensive" && "Defensive Security"}
          {program.category === "cloud" && "Cloud Security"}
          {program.category === "advanced" && "Advanced Specialization"}
        </p>
        <Badge variant={levelVariant[program.level]}>{program.level}</Badge>
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-text-primary">
        {program.name}
      </h3>

      <p className="mt-2 font-mono text-2xl font-medium tabular-nums text-text-primary">
        {program.outcomeStat}{" "}
        <span className="font-sans text-sm font-normal text-text-secondary">{program.outcomeStatLabel}</span>
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {program.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="rounded-[var(--radius-sm)] bg-surface-raised px-2.5 py-1 text-xs text-text-secondary">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border-muted pt-4 text-sm">
        <div>
          <p className="text-text-secondary">
            {program.durationWeeks} weeks · {program.format === "cohort" ? "Cohort-based" : "Self-paced"}
          </p>
          <p className="font-medium text-text-primary">{formatUsd(program.priceUsd)}</p>
        </div>
        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex shrink-0 items-center gap-1 rounded-[var(--radius-sm)] border border-border px-3.5 py-2 text-sm font-medium text-text-primary transition-colors group-hover:border-accent group-hover:text-accent"
        >
          View program
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

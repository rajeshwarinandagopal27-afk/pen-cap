import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Program } from "@/lib/data/programs";

const levelVariant = {
  "Beginner-friendly": "low",
  Intermediate: "medium",
  Advanced: "high",
} as const;

function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="group flex h-full flex-col p-6 hover:elevation-2 hover:border-[color-mix(in_oklab,var(--color-accent)_40%,var(--color-border))]">
      <Link href={`/programs/${program.slug}`} className="flex h-full flex-col focus-visible:outline-none">
        <span className="eyebrow">{program.category}</span>
        <h3 className="type-display-sm mt-2 text-[var(--color-text-primary)]">{program.name}</h3>

        <p className="type-mono-sm mt-3 text-[var(--color-accent)]">
          {program.outcomeStat} <span className="text-[var(--color-text-secondary)] font-normal">{program.outcomeLabel.replace(/^\d+%\s*/, "")}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {program.skillTags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
          <Badge variant={levelVariant[program.level]}>{program.level}</Badge>
          <span>{program.durationWeeks} weeks</span>
          <span>·</span>
          <span>{program.format.join(" / ")}</span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border-muted)] pt-5">
          <div>
            <p className="type-mono-md text-[var(--color-text-primary)]">
              ₹{program.tuition.toLocaleString("en-IN")}
            </p>
            <p className="type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
              from ₹{program.emiFrom.toLocaleString("en-IN")}/mo
            </p>
          </div>
          <Button variant="secondary" size="sm" asChild tabIndex={-1}>
            <span>
              View program <ArrowRight />
            </span>
          </Button>
        </div>
      </Link>
    </Card>
  );
}

export { ProgramCard };

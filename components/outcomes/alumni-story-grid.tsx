"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { RevealGroup } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { alumniStories } from "@/lib/data/outcomes";

const backgrounds = ["All", "Career changer", "Military transition", "Self-taught", "Recent graduate"] as const;

function AlumniStoryGrid() {
  const [filter, setFilter] = React.useState<(typeof backgrounds)[number]>("All");

  const filtered =
    filter === "All" ? alumniStories : alumniStories.filter((s) => s.background === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {backgrounds.map((b) => (
          <button
            key={b}
            onClick={() => setFilter(b)}
            className={cn(
              "rounded-[var(--radius-full)] border px-3.5 py-2 type-body-xs font-medium normal-case tracking-normal transition-colors",
              filter === b
                ? "border-[var(--color-accent)] bg-[var(--color-accent-fill)] text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
            )}
          >
            {b}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((story) => (
          <div key={story.name} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
            <span className="eyebrow">{story.background}</span>
            <p className="type-body-md mt-3 text-[var(--color-text-primary)]">{story.name}</p>
            <div className="mt-3 flex items-center gap-2 type-body-sm text-[var(--color-text-secondary)]">
              <span>{story.from}</span>
              <ArrowRight className="size-3.5 shrink-0 text-[var(--color-accent)]" />
              <span className="text-[var(--color-text-primary)]">{story.to}</span>
            </div>
            <p className="type-body-xs text-[var(--color-text-muted)] mt-3 normal-case tracking-normal">
              {story.program}
            </p>
          </div>
        ))}
      </RevealGroup>
    </div>
  );
}

export { AlumniStoryGrid };

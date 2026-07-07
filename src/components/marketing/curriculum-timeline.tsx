import { CheckCircle2Icon } from "lucide-react";

import type { Program } from "@/lib/types";
import { Reveal } from "@/components/marketing/reveal";

export function CurriculumTimeline({ modules }: { modules: Program["modules"] }) {
  return (
    <div className="relative space-y-6 border-l border-border pl-8">
      {modules.map((module, index) => (
        <Reveal key={module.title} delay={index * 0.06} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1 flex size-3 items-center justify-center rounded-full bg-royal-500 ring-4 ring-royal-500/15" />
          <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {module.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-royal-500" />
                {topic}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

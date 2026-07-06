import { Badge } from "@/components/ui/badge";
import type { CurriculumModule } from "@/lib/data/programs";

function CurriculumTimeline({ modules }: { modules: CurriculumModule[] }) {
  return (
    <ol className="flex flex-col">
      {modules.map((module, i) => (
        <li key={module.title} className="relative flex gap-6 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] type-mono-sm text-[var(--color-accent)]">
              {i + 1}
            </span>
            {i !== modules.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-[var(--color-border)]" aria-hidden="true" />
            )}
          </div>
          <div className="flex-1 pb-1">
            <span className="type-body-xs text-[var(--color-text-muted)]">{module.weekRange}</span>
            <h4 className="type-display-sm mt-1 text-[var(--color-text-primary)]">{module.title}</h4>
            <p className="type-body-md mt-2 text-[var(--color-text-secondary)] reading-measure">
              {module.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {module.skills.map((skill) => (
                <Badge key={skill} variant="neutral">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export { CurriculumTimeline };

import type { CurriculumModule } from "@/lib/types";

export function CurriculumTimeline({ modules }: { modules: CurriculumModule[] }) {
  return (
    <ol className="flex flex-col gap-0">
      {modules.map((module, index) => (
        <li key={module.title} className="relative flex gap-5 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-fill font-mono text-xs font-medium text-accent">
              {index + 1}
            </span>
            {index < modules.length - 1 && <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />}
          </div>
          <div className="pb-2">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-text-muted">{module.weekRange}</p>
            <h4 className="mt-1 font-display text-lg font-semibold text-text-primary">{module.title}</h4>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-text-secondary">{module.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {module.skills.map((skill) => (
                <span key={skill} className="rounded-[var(--radius-sm)] bg-surface-raised px-2.5 py-1 text-xs text-text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

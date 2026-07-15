import { workflowSteps } from "@/lib/content";
import { Reveal } from "@/components/common/reveal";

export function WorkflowDiagram() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {workflowSteps.map((step, i) => {
        const Icon = step.icon;
        return (
          <Reveal key={step.title} delay={(i % 4) * 0.06} className="bg-surface">
            <li className="group flex h-full flex-col gap-3 p-6 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 font-mono text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-text-muted transition-colors group-hover:text-brand" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}

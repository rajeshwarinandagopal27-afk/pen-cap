import { careerRoadmap } from "@/lib/data/placements";
import { Reveal } from "@/components/marketing/reveal";

export function CareerRoadmap() {
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="pointer-events-none absolute inset-x-0 top-[52px] hidden h-px bg-border lg:block" />
      {careerRoadmap.map((step, index) => (
        <Reveal key={step.step} delay={index * 0.06}>
          <div className="relative rounded-2xl border border-border bg-card p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-navy-900 font-mono text-sm font-semibold text-white dark:bg-white dark:text-navy-950">
              {step.step}
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-border bg-noise", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.4]" />
        <div className="ambient right-[-10%] top-[-30%] h-[460px] w-[460px] opacity-40" />
      </div>
      <div className="container-page pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

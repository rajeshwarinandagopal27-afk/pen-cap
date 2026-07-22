import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { PageHeroMotif, type MotifVariant } from "@/components/common/page-hero-motif";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  motif,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  motif?: MotifVariant;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-border bg-noise", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.35]" />
        <div className="ambient right-[-6%] top-[-24%] h-[440px] w-[440px] opacity-40" />
      </div>
      {motif && <PageHeroMotif variant={motif} />}
      <div className="container-page relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
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

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { manufacturers } from "@/lib/content";

export function ManufacturerMarquee() {
  const row = [...manufacturers, ...manufacturers];
  return (
    <section aria-label="Manufacturers we source" className="border-b border-border py-14">
      <div className="container-page">
        <Reveal className="mb-8 flex flex-col items-center gap-2 text-center">
          <Eyebrow className="justify-center">Global Manufacturers</Eyebrow>
          <p className="max-w-xl text-sm text-text-muted">
            We source components from globally recognized manufacturers across the electronics supply chain.
          </p>
        </Reveal>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-text-muted transition-colors hover:text-text-primary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

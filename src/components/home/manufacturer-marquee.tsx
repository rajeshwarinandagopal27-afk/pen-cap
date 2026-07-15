import { manufacturers } from "@/lib/content";

export function ManufacturerMarquee() {
  const row = [...manufacturers, ...manufacturers];
  return (
    <section aria-label="Brands and lines we source" className="border-b border-border py-10">
      <div className="container-page">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          Franchise &amp; authorized lines we source
        </p>
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

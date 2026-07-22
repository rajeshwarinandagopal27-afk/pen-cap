import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { WorldMap } from "@/components/motion/world-map";

export function GlobalSourcing() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient left-[58%] top-[34%] h-[420px] w-[560px] opacity-25" />
      </div>
      <div className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Global Sourcing"
          title="One accountable partner, a worldwide supply base."
          description="When a component isn't on a local shelf, the search goes global. Supplier routes across every region converge on our India operations — and on your requirement."
        />

        <Reveal className="mt-12">
          <div className="relative mx-auto max-w-5xl [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
            <WorldMap />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Worldwide reach", v: "Suppliers sourced across continents, consolidated into one partner." },
            { k: "Hard-to-find & obsolete", v: "Allocated, constrained and end-of-life parts located through specialist channels." },
            { k: "Verified before dispatch", v: "Authenticity and documentation checked at intake, wherever a part originates." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.06} className="rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent-500/40">
              <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{c.k}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{c.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

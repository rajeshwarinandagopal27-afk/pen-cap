import Link from "next/link";

import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { differentiators } from "@/lib/data/site";

function Differentiators() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why PenCap</span>
          <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
            Four claims. Four numbers. No adjectives.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {differentiators.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="group flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 transition-colors duration-[var(--duration-fast)] hover:border-[color-mix(in_oklab,var(--color-accent)_40%,var(--color-border))]"
            >
              <p className="type-mono-md text-2xl text-[var(--color-accent)]">{d.stat}</p>
              <p className="type-body-xs text-[var(--color-text-muted)] normal-case tracking-normal">
                {d.statLabel}
              </p>
              <h3 className="type-display-sm mt-1 text-[var(--color-text-primary)]">{d.title}</h3>
              <p className="type-body-sm text-[var(--color-text-secondary)]">{d.claim}</p>
            </Link>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export { Differentiators };

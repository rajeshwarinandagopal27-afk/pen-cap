import { RevealGroup } from "@/components/motion/reveal";
import { StatTile } from "@/components/cards/stat-tile";
import { homepageStats } from "@/lib/data/site";

function ProofStrip() {
  return (
    <section className="border-y border-[var(--color-border)] py-14 lg:py-16">
      <div className="container-page">
        <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {homepageStats.map((stat) => (
            <StatTile
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              footnote="See methodology"
              footnoteHref="/outcomes"
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export { ProofStrip };

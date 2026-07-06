import { Reveal } from "@/components/motion/reveal";
import { CyberRangeCard } from "@/components/cards/cyber-range-card";

function CyberRangeTeaser() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <CyberRangeCard />
        </Reveal>
      </div>
    </section>
  );
}

export { CyberRangeTeaser };

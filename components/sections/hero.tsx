import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ResolveText } from "@/components/motion/resolve-text";
import { NetworkGraph } from "@/components/motion/network-graph";
import { Reveal } from "@/components/motion/reveal";
import { heroTrustLogos } from "@/lib/data/site";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
      <NetworkGraph dense className="absolute inset-0 -z-10 opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--color-canvas)]" />

      <div className="container-page">
        <div className="max-w-4xl">
          <Reveal>
            <span className="eyebrow">Cybersecurity education, verified</span>
          </Reveal>

          <ResolveText
            text="Trained by operators. Proven by outcomes."
            className="type-display-2xl mt-5 text-[var(--color-text-primary)]"
          />

          <Reveal delay={0.1}>
            <p className="type-body-xl mt-6 max-w-2xl text-[var(--color-text-secondary)]">
              Cohort-based offensive and defensive security training in Chennai — EC-Council
              accredited, CompTIA authorized, and the only program in India that publishes its
              placement rate every year.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/admissions">
                Apply Now <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/cyber-range">Try a free challenge</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.22} className="mt-16">
            <p className="type-body-xs text-[var(--color-text-muted)]">Alumni now working at</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
              {heroTrustLogos.map((name) => (
                <span
                  key={name}
                  className="type-display-sm text-[var(--color-text-muted)] grayscale opacity-70"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Hero };

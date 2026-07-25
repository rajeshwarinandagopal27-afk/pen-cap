import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Wrench } from "lucide-react";

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { PcbGlow } from "@/components/motion/pcb-glow";
import { aboutContent } from "@/lib/content";

const pillars = [
  { icon: ShieldCheck, title: "Genuine components", body: "Sourced through verifiable channels and checked before dispatch." },
  { icon: Globe2, title: "Global reach", body: "A worldwide supply base consolidated into one accountable partner." },
  { icon: Wrench, title: "Engineering-literate", body: "Requests read against the datasheet, not just the part number." },
];

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <PcbGlow className="opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>
      <div className="container-page py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 max-w-md text-balance font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              A sourcing partner, engineered for procurement.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-text-secondary">{aboutContent.story}</p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/about">
                Read our story <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-1">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent-500/40">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-raised text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

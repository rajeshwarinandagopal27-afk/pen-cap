"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, CircuitBoard, Zap, Cable, Radar, Layers, Layers3, Factory, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { TiltCard } from "@/components/motion/tilt-card";

type Block = { name: string; slug: string; icon: LucideIcon };

const blocks: Block[] = [
  { name: "Integrated Circuits", slug: "integrated-circuits", icon: Cpu },
  { name: "Semiconductors", slug: "semiconductors-mosfet-igbt", icon: CircuitBoard },
  { name: "Power Electronics", slug: "power-ics-voltage-regulators", icon: Zap },
  { name: "Connectors", slug: "connectors", icon: Cable },
  { name: "Sensors", slug: "sensors", icon: Radar },
  { name: "Passive Components", slug: "passive-components", icon: Layers },
  { name: "Development Boards", slug: "development-boards", icon: Layers3 },
  { name: "Industrial Electronics", slug: "industrial-electronics", icon: Factory },
];

export function ProductBlocks() {
  return (
    <section className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Product Categories"
        title="Every category, sourced with precision."
        description="Thirteen component families across our sourcing capability. Explore the eight most requested — each links to full applications, supply options and an RFQ."
        align="center"
        className="mx-auto items-center"
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {blocks.map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.slug} delay={(i % 4) * 0.06}>
              <TiltCard className="group h-full">
                <Link
                  href={`/products#${b.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="relative inline-flex size-12 items-center justify-center rounded-xl border border-border bg-surface-raised text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="relative mt-6 font-display text-lg font-bold tracking-tight text-text-primary">
                    {b.name}
                  </h3>
                  <span className="relative mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-text-muted transition-colors group-hover:text-brand">
                    Explore
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

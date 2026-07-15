import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";

const capabilities = [
  "Bill-of-materials consolidation into a single quote",
  "Alternate-part cross-referencing on constrained lines",
  "Scheduled and forecast-based release orders",
  "Line-side kitting for EMS and contract manufacturers",
];

export function SupplyChainTeaser() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-10 rounded-2xl border border-border bg-surface/50 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
        <Reveal>
          <Eyebrow>Supply Chain Expertise</Eyebrow>
          <h2 className="mt-4 max-w-md text-balance font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Sourcing that plans ahead of your production schedule.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-text-secondary">
            A bill of materials is not a list of unrelated parts — it&apos;s a schedule. We treat it that way,
            consolidating sourcing decisions around the date your line actually needs them.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/solutions">
              Explore solutions <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="flex flex-col gap-4">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-xl border border-border-muted bg-surface p-4">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

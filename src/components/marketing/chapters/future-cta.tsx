import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NetworkMotif } from "@/components/marketing/network-motif";
import { Reveal } from "@/components/marketing/reveal";

export function FutureCta() {
  return (
    <section id="future" className="dark relative overflow-hidden bg-canvas py-28 text-text-primary sm:py-40">
      <NetworkMotif className="right-[-6rem] bottom-[-4rem] hidden lg:block" />
      <div className="container-page relative flex flex-col items-start gap-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Chapter Eight — The Future</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-semibold leading-[1.03] tracking-tight text-balance">
            Your cybersecurity career starts the moment you decide.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <Badge variant="urgency">Fall cohort starts September 14 — 12 of 40 seats remaining</Badge>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a campus visit <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/admissions">Start your application</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

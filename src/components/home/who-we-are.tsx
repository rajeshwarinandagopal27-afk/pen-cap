import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/lib/content";

export function WhoWeAre() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-4 max-w-md text-balance font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            A sourcing partner, not a parts catalogue.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-6">
          <p className="text-pretty text-lg leading-relaxed text-text-secondary">{aboutContent.story}</p>
          <Button asChild variant="outline" className="self-start">
            <Link href="/about">
              Read our story <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

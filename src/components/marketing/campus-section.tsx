import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { campusHighlights } from "@/lib/data/campus";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { CampusGallery } from "@/components/marketing/campus-gallery";

export function CampusSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionEyebrow>Our Campus</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              A campus built like the enterprises you&rsquo;ll defend
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              From a live Security Operations Center to an isolated attack range, every corner of
              our Chennai campus is designed for hands-on practice — not passive lectures.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {campusHighlights.map((item, index) => (
              <Reveal key={item.title} delay={0.15 + index * 0.05}>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8">
            <Button asChild size="lg" variant="accent">
              <Link href="/campus">
                Take a Campus Tour
                <ArrowRightIcon />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <CampusGallery />
        </Reveal>
      </div>
    </section>
  );
}

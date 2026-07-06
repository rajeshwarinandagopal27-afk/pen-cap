import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { ProgramCard } from "@/components/cards/program-card";
import { getFeaturedPrograms } from "@/lib/data/programs";

function ProgramsPreview() {
  const featured = getFeaturedPrograms();

  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Programs</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Pick the path that matches where you&rsquo;re starting from.
            </h2>
          </div>
          <Link
            href="/programs"
            className="flex shrink-0 items-center gap-1.5 type-body-md font-medium text-[var(--color-accent)] underline underline-offset-4 hover:no-underline"
          >
            View all programs <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export { ProgramsPreview };

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { admissionsSteps } from "@/lib/data/site";

function AdmissionsSteps() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Admissions</span>
          <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
            How the funnel works — the whole thing, before you click anything.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsSteps.map((step) => (
            <div key={step.step} className="flex flex-col gap-3">
              <span className="type-mono-md text-[var(--color-accent)]">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="type-display-sm text-[var(--color-text-primary)]">{step.title}</h3>
              <p className="type-body-sm text-[var(--color-text-secondary)]">{step.description}</p>
            </div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12">
          <Button asChild size="lg">
            <Link href="/admissions">
              Start your application <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export { AdmissionsSteps };

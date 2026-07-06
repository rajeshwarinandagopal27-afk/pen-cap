import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

function EnterpriseTeaserBand() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <div className="container-page">
        <Reveal className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="type-body-lg text-[var(--color-text-primary)]">
            Training your security team, not just yourself?
          </p>
          <Link
            href="/enterprise"
            className="flex shrink-0 items-center gap-1.5 type-body-md font-medium text-[var(--color-accent)] underline underline-offset-4 hover:no-underline"
          >
            Talk to our team <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export { EnterpriseTeaserBand };

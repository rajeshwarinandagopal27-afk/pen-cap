import { faqItems } from "@/lib/data/faq";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { Reveal } from "@/components/marketing/reveal";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FaqJsonLd } from "@/components/json-ld";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="container-px mx-auto max-w-4xl py-20 lg:py-28">
      <FaqJsonLd items={items} />
      <div className="text-center">
        <Reveal>
          <SectionEyebrow>FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 rounded-2xl border border-border bg-card px-6">
        <FaqAccordion items={items} />
      </Reveal>
    </section>
  );
}

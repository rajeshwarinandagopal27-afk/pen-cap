import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import type { FaqItem } from "@/lib/data/faq";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

function FaqSection({ items, eyebrow = "FAQ", title = "Questions worth asking before you apply", className }: FaqSectionProps) {
  return (
    <section className={className}>
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">{title}</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible defaultValue={undefined}>
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export { FaqSection };

import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { whyChoose } from "@/lib/content";

export function WhySlt() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why SLT"
          title="The trust layer between your design and its first power-on."
          description="Procurement can't compromise on authenticity, lead time or accountability. Neither do we."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={(i % 3) * 0.06} className="bg-surface">
                <div className="flex h-full flex-col gap-3 p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{v.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

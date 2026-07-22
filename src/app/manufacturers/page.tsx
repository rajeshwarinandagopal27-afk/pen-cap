import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { manufacturers } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Manufacturers",
  description:
    "SLT Technology sources components from globally recognized manufacturers across the electronics supply chain — Texas Instruments, Analog Devices, STMicroelectronics, Infineon, NXP and more.",
  path: "/manufacturers",
});

export default function ManufacturersPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturers"
        motif="chipgrid"
        title="Globally recognized manufacturers, sourced responsibly."
        description="We source components from globally recognized manufacturers across the electronics supply chain. Brand names below identify the product lines we source — they do not imply authorization, partnership or affiliation."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {manufacturers.map((name, i) => (
            <Reveal
              key={name}
              delay={(i % 4) * 0.04}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:border-brand/40"
            >
              <span className="font-display text-base font-bold tracking-tight text-text-primary sm:text-lg">
                {name}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 rounded-xl border border-border-muted bg-surface/60 p-6">
          <p className="text-sm leading-relaxed text-text-muted">
            SLT Technology sources components across the global electronics supply chain, including product lines
            from the manufacturers named above. This listing is provided to indicate the brands whose components we
            source and does not state or imply that SLT Technology is an authorized distributor, partner or
            representative of any manufacturer named, unless explicitly confirmed in writing.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Looking for a specific manufacturer or part line?"
        description="Send us the part number or manufacturer and we'll confirm sourcing options."
      />
    </>
  );
}

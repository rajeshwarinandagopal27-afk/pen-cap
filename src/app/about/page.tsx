import { PageHero } from "@/components/common/page-hero";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { aboutContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "SLT Technology is a component sourcing and distribution partner for OEMs, EMS providers and engineering teams — our story, mission, vision and values.",
  path: "/about",
});

function Narrative({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="grid gap-6 border-t border-border py-14 sm:grid-cols-[0.8fr_1.2fr] sm:gap-16 sm:py-16">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-xs text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">{body}</p>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SLT Technology"
        motif="orbits"
        title="A sourcing partner built for procurement, not retail."
        description="SLT Technology exists to remove one specific kind of risk from hardware development: the gap between a finished design and a genuine, on-time component supply."
      />

      <section className="container-page py-4 sm:py-6">
        <Narrative eyebrow="Company Story" title="Why SLT exists" body={aboutContent.story} />
        <Narrative eyebrow="Mission" title="What we're building toward" body={aboutContent.mission} />
        <Narrative eyebrow="Vision" title="Where this is headed" body={aboutContent.vision} />

        <Reveal className="border-t border-border py-14 sm:py-16">
          <Eyebrow>Values</Eyebrow>
          <h2 className="mt-4 max-w-md text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
            What governs a sourcing decision at SLT.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6">
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold tracking-tight text-text-primary">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Narrative
          eyebrow="Leadership Philosophy"
          title="Engineering decisions first"
          body={aboutContent.leadershipPhilosophy}
        />
        <Narrative eyebrow="Quality Culture" title="Verification before dispatch" body={aboutContent.qualityCulture} />
        <Narrative
          eyebrow="Supply Chain Excellence"
          title="Redundancy over dependency"
          body={aboutContent.supplyChainExcellence}
        />
        <Narrative eyebrow="Future Vision" title="The next decade of sourcing" body={aboutContent.futureVision} />
      </section>

      <CtaBand />
    </>
  );
}

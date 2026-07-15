import { Globe2, Search, Recycle, GitCompareArrows, Gauge, TrendingDown, GraduationCap } from "lucide-react";

import { PageHero } from "@/components/common/page-hero";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Global Sourcing",
  description:
    "Worldwide supplier network, hard-to-find and obsolete component sourcing, alternative part cross-referencing, supply chain support and lead-time reduction.",
  path: "/global-sourcing",
});

const sections = [
  {
    icon: Globe2,
    title: "Worldwide Supplier Network",
    body: "A component request is only as good as the network behind it. Ours extends across regions and channels, so a search doesn't stop at one distributor's shelf.",
  },
  {
    icon: Search,
    title: "Hard-to-Find Components",
    body: "Allocated and constrained parts need a different search strategy than in-stock ones. We work these requests through specialist channels built for exactly this problem.",
  },
  {
    icon: Recycle,
    title: "Obsolete Parts",
    body: "A discontinued part doesn't end a production programme — it starts a search. We locate genuine end-of-life stock for designs that can't be redesigned on short notice.",
  },
  {
    icon: GitCompareArrows,
    title: "Alternative Component Sourcing",
    body: "When a primary part is out of reach, a cross-reference is only useful if it's engineering-sound. Alternates are checked against electrical and mechanical fit before they're proposed.",
  },
  {
    icon: Gauge,
    title: "Supply Chain Support",
    body: "Sourcing works better with visibility. We provide ongoing status on lead times, allocation risk and delivery schedules for the parts that matter to your build plan.",
  },
  {
    icon: TrendingDown,
    title: "Lead Time Reduction",
    body: "The earlier a constrained part is flagged, the more options remain. Long lead-time items are tracked proactively, not discovered when a quote comes back with a bad date.",
  },
  {
    icon: GraduationCap,
    title: "Procurement Expertise",
    body: "A sourcing request is read against the datasheet, not just the part number — by people who understand what the component actually does in your design.",
  },
];

export default function GlobalSourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Sourcing"
        title="Sourcing that starts where a catalogue ends."
        description="Some components are a click away. The ones that matter most rarely are. This is the network and process built for those."
      />

      <section className="container-page py-4 sm:py-6">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.05}
              className="grid gap-6 border-t border-border py-14 sm:grid-cols-[auto_0.7fr_1.3fr] sm:items-start sm:gap-10 sm:py-16"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="size-6" />
              </span>
              <div>
                <Eyebrow>{`0${i + 1}`}</Eyebrow>
                <h2 className="mt-4 max-w-xs text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
                  {s.title}
                </h2>
              </div>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">{s.body}</p>
            </Reveal>
          );
        })}
      </section>

      <CtaBand
        title="Looking for a component that isn't easy to find?"
        description="This is exactly the kind of request our sourcing network is built for."
      />
    </>
  );
}

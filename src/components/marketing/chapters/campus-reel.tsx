import { Reveal } from "@/components/marketing/reveal";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";

const panels = [
  {
    index: "I",
    title: "The Cohort Room",
    caption: "Twelve students, one mentor, no back row to hide in.",
    glowPosition: "22% 30%",
  },
  {
    index: "II",
    title: "The Range",
    caption: "The same lab environment our alumni now defend for a living.",
    glowPosition: "78% 28%",
  },
  {
    index: "III",
    title: "The Operations Floor",
    caption: "Where a review turns into an offer letter.",
    glowPosition: "50% 70%",
  },
];

export function CampusReel() {
  return (
    <section id="campus" className="dark relative bg-canvas text-text-primary">
      <div className="container-page pt-24 sm:pt-32">
        <SectionEyebrow>Chapter Six — The Campus</SectionEyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          You need to see it to believe it.
        </h2>
      </div>

      <div className="mt-16 flex flex-col">
        {panels.map((panel) => (
          <div key={panel.title} className="relative flex min-h-[60vh] items-end overflow-hidden border-t border-border sm:min-h-[75vh]">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `radial-gradient(48% 48% at ${panel.glowPosition}, color-mix(in srgb, var(--color-signal-500) 13%, transparent), transparent 72%)`,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(color-mix(in srgb, var(--color-ink-300) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-ink-300) 8%, transparent) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/30" />

            <div className="container-page relative pb-14 sm:pb-20">
              <Reveal>
                <p className="text-sm text-text-muted">{panel.index}</p>
                <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
                  {panel.caption}
                </p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

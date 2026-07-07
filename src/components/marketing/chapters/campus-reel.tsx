import { Reveal } from "@/components/marketing/reveal";

const panels = [
  {
    index: "I",
    title: "The Cohort Room",
    caption: "Twelve students, one mentor, no back row to hide in.",
    gradient:
      "radial-gradient(65% 60% at 20% 20%, color-mix(in srgb, var(--color-signal-500) 30%, transparent), transparent 70%), radial-gradient(50% 50% at 80% 80%, color-mix(in srgb, var(--color-signal-700) 35%, transparent), transparent 65%)",
  },
  {
    index: "II",
    title: "The Range",
    caption: "The same lab environment our alumni now defend for a living.",
    gradient:
      "radial-gradient(60% 55% at 75% 25%, color-mix(in srgb, var(--color-ember-500) 26%, transparent), transparent 70%), radial-gradient(55% 50% at 15% 85%, color-mix(in srgb, var(--color-signal-600) 24%, transparent), transparent 65%)",
  },
  {
    index: "III",
    title: "The Operations Floor",
    caption: "Where a review turns into an offer letter.",
    gradient:
      "radial-gradient(60% 55% at 30% 75%, color-mix(in srgb, var(--color-signal-400) 26%, transparent), transparent 70%), radial-gradient(55% 50% at 85% 20%, color-mix(in srgb, var(--color-ember-400) 20%, transparent), transparent 65%)",
  },
];

export function CampusReel() {
  return (
    <section id="campus" className="dark relative bg-canvas text-text-primary">
      <div className="container-page pt-24 sm:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Chapter Six — The Campus</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          You need to see it to believe it.
        </h2>
      </div>

      <div className="mt-16 flex flex-col">
        {panels.map((panel) => (
          <div key={panel.title} className="relative flex min-h-[70vh] items-end overflow-hidden border-t border-border sm:min-h-[85vh]">
            <div aria-hidden="true" className="absolute inset-0" style={{ background: panel.gradient }} />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(color-mix(in srgb, var(--color-ink-100) 6%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-ink-100) 6%, transparent) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/40" />

            <div className="container-page relative pb-14 sm:pb-20">
              <Reveal>
                <p className="font-mono text-sm text-text-muted">{panel.index}</p>
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

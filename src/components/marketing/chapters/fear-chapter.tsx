import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

const thoughts = [
  "“I don’t know where to begin.”",
  "“My friends already got jobs.”",
  "“I wasted a year figuring this out alone.”",
  "“My parents are worried I made the wrong call.”",
  "“What if I pick the wrong institute — again?”",
];

export function FearChapter() {
  return (
    <section id="fear" className="relative overflow-hidden bg-canvas py-28 sm:py-36">
      <div className="container-page flex flex-col gap-10">
        {thoughts.map((thought, i) => (
          <Reveal
            key={thought}
            delay={i * 0.04}
            className={cn("flex", i % 2 === 0 ? "justify-start" : "justify-end")}
          >
            <p className="max-w-md font-display text-2xl font-medium leading-tight text-text-secondary sm:text-3xl">
              {thought}
            </p>
          </Reveal>
        ))}

        <Reveal delay={thoughts.length * 0.04 + 0.12}>
          <p className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
            What if you just needed someone to tell you where to start?
          </p>
        </Reveal>
      </div>
    </section>
  );
}

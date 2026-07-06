import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { FacultyCard } from "@/components/cards/faculty-card";
import { faculty } from "@/lib/data/faculty";

function FacultySpotlight() {
  const spotlight = faculty.slice(0, 4);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Practitioner faculty</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Instructors named, credentialed, and still in the field.
            </h2>
          </div>
          <Link
            href="/about"
            className="flex shrink-0 items-center gap-1.5 type-body-md font-medium text-[var(--color-accent)] underline underline-offset-4 hover:no-underline"
          >
            Meet the full faculty <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {spotlight.map((person) => (
            <FacultyCard key={person.id} person={person} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export { FacultySpotlight };

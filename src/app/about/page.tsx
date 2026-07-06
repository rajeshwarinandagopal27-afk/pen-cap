import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { FacultyCard } from "@/components/marketing/faculty-card";
import { faculty } from "@/lib/data/faculty";

export const metadata: Metadata = {
  title: "About & faculty",
  description:
    "PenCap Institute of Excellence was built on one idea: prove it, don't just claim it. Meet the practitioner faculty who teach every program.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>About PenCap</SectionEyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Proof, not promises.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            PenCap Institute of Excellence was founded on a simple frustration: most cybersecurity
            education sells confidence instead of competence. We built the opposite — a curriculum
            designed by practitioners who still do the work, measured against outcomes we publish
            in full, and tested in a live-fire lab environment before a single dollar changes
            hands.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            We keep our cohorts small on purpose. Every instructor listed below still works, or
            recently worked, the exact job they teach — which means the curriculum changes when
            the threat landscape changes, not once a year when a textbook gets reprinted.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionEyebrow>Faculty</SectionEyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            The people teaching every module
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <FacultyCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-muted py-16 sm:py-20">
        <div className="container-page container-reading">
          <SectionEyebrow>Accreditation</SectionEyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary">
            Accredited &amp; independently reviewed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            PenCap Institute is an accredited continuing-education provider. Our placement
            statistics are compiled internally and reviewed annually by Halvorsen &amp; Cole, an
            independent accounting firm, for methodology consistency — see the full breakdown on
            the Outcomes page.
          </p>
        </div>
      </section>
    </div>
  );
}

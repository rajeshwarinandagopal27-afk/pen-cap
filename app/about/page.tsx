import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { FacultyFullGrid } from "@/components/about/faculty-full-grid";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { site } from "@/lib/data/site";
import { homepageFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "About & Faculty",
  description:
    "PenCap Institute of Excellence is an EC-Council Accredited Training Center and CompTIA Authorized Training Partner in Chennai. Meet the practitioner faculty who teach every program.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <span className="eyebrow">About PenCap</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            We started PenCap because Chennai&rsquo;s security talent pipeline was broken.
          </h1>
          <div className="mt-6 max-w-2xl reading-measure">
            <p className="type-body-lg text-[var(--color-text-secondary)]">
              PenCap Institute of Excellence was founded in 2019 by a small group of practicing
              penetration testers and SOC leads who were frustrated watching capable career-changers
              get filtered out of security roles — not for lack of aptitude, but for lack of a
              credible, honest path in. We built the program we wished had existed: practitioner-taught,
              outcome-audited, and built around a live practice environment instead of slideware.
            </p>
            <p className="type-body-lg mt-4 text-[var(--color-text-secondary)]">
              Today we&rsquo;re an official EC-Council Accredited Training Center and CompTIA
              Authorized Training Partner, based at Tidel Park in Taramani, Chennai, with over 1,840
              alumni working across 210+ employers.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Faculty</span>
            <h2 className="type-display-lg mt-3 text-[var(--color-text-primary)]">
              Every instructor, named and credentialed.
            </h2>
            <p className="type-body-lg mt-3 text-[var(--color-text-secondary)]">
              No anonymous &ldquo;expert instructors&rdquo; — every person teaching at PenCap still
              works, or recently worked, in the field.
            </p>
          </Reveal>
          <div className="mt-10">
            <FacultyFullGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Accreditation</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
              Officially recognized, not self-declared.
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {site.accreditations.map((a) => (
                <li
                  key={a.abbr}
                  className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] p-4"
                >
                  <span className="type-body-sm text-[var(--color-text-primary)]">{a.name}</span>
                  <span className="type-mono-sm text-[var(--color-accent)]">{a.abbr}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="eyebrow">Campus</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
              Chennai, with a fully online option.
            </h2>
            <p className="type-body-md mt-4 text-[var(--color-text-secondary)] reading-measure">
              Our campus sits inside Tidel Park in Taramani — Chennai&rsquo;s largest IT park — used
              for optional in-person cohort days and faculty office hours. Every program runs fully
              online with live instruction, so a campus visit is never required to complete a
              program. Prospective applicants are welcome to arrange a tour before enrolling.
            </p>
            <p className="type-body-sm mt-4 text-[var(--color-text-muted)]">{site.address}</p>
          </Reveal>
        </div>
      </section>

      <FaqSection items={homepageFaq.slice(0, 4)} />

      <FinalCtaBand
        title="Ready to meet your cohort?"
        ctaLabel="Apply Now"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Apply Now" href="/admissions" />
    </>
  );
}

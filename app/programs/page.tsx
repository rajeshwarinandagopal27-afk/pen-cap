import type { Metadata } from "next";

import { ProgramsListingClient } from "@/components/programs/programs-listing-client";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { homepageFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Cybersecurity Training Programs",
  description:
    "Compare PenCap's cybersecurity training programs — Offensive Security, CEH, Security+, Cloud & DevSecOps, GRC & Compliance, and Certified Network Defender. Filter by level, focus, and format.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <section className="pt-32 pb-8 lg:pt-40">
        <div className="container-page">
          <span className="eyebrow">Programs</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            Six programs. One honest answer for which one is yours.
          </h1>
          <p className="type-body-lg mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Filter by level, focus, and format — or compare every program side by side.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page">
          <ProgramsListingClient />
        </div>
      </section>

      <FaqSection items={homepageFaq.slice(0, 6)} />
      <FinalCtaBand
        title="Not sure which program fits? The eligibility check tells you in 12 minutes."
        ctaLabel="Check your eligibility"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Check your eligibility" href="/admissions" />
    </>
  );
}

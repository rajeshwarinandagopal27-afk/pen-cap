import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Differentiators } from "@/components/sections/differentiators";
import { ProgramsPreview } from "@/components/sections/programs-preview";
import { CyberRangeTeaser } from "@/components/sections/cyber-range-teaser";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FacultySpotlight } from "@/components/sections/faculty-spotlight";
import { AdmissionsSteps } from "@/components/sections/admissions-steps";
import { EnterpriseTeaserBand } from "@/components/sections/enterprise-teaser-band";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaBand } from "@/components/sections/final-cta-band";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { homepageFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Cybersecurity Training Institute in Chennai",
  description:
    "PenCap Institute of Excellence trains security operators, not test-takers. 89% placement rate, named practitioner faculty, and a free Cyber Range — EC-Council and CompTIA accredited.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Differentiators />
      <ProgramsPreview />
      <CyberRangeTeaser />
      <TestimonialsSection />
      <FacultySpotlight />
      <AdmissionsSteps />
      <EnterpriseTeaserBand />
      <FaqSection items={homepageFaq} />
      <FinalCtaBand
        title="Decide with the numbers in front of you, not after."
        ctaLabel="Apply Now"
        ctaHref="/admissions"
      />
      <StickyMobileCta label="Apply Now" href="/admissions" />
    </>
  );
}

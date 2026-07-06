import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { ProgramsExplorer } from "@/components/marketing/programs-explorer";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { programs } from "@/lib/data/programs";
import { homeFaq } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Compare PenCap Institute's cohort-based cybersecurity programs: Offensive Security, SOC Analyst Accelerator, Cloud Security & DevSecOps, and the Advanced Red Team Certificate.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <SectionEyebrow>Programs</SectionEyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
        Four programs. One published standard of proof.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary">
        Every program lists its own outcome rate, prerequisites, and — deliberately — who it
        probably isn&rsquo;t the right fit for. Filter below, or switch to the comparison view to
        see them side by side.
      </p>

      <div className="mt-12">
        <ProgramsExplorer programs={programs} />
      </div>

      <div className="container-reading mt-24">
        <SectionEyebrow>Questions</SectionEyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
          Common questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={homeFaq.slice(0, 5)} idPrefix="programs-faq" />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { EligibilityQuiz } from "@/components/admissions/eligibility-quiz";

export const metadata: Metadata = {
  title: "Admissions — check your eligibility",
  description:
    "A 2-minute eligibility check, no signup required, that ends with a personalized program recommendation.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <SectionEyebrow>Admissions · Step 1 of 4</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Check your eligibility
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          Four questions, no account required. You&rsquo;ll get a personalized program
          recommendation immediately — this isn&rsquo;t the application itself, just the fastest
          way to find out which program fits.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <EligibilityQuiz />
      </div>

      <p className="mt-8 text-center text-sm text-text-secondary">
        Already know which program you want?{" "}
        <Link href="/admissions/apply" className="font-medium text-accent hover:underline">
          Skip to the application
        </Link>
      </p>
    </div>
  );
}

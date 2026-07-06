import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { ApplicationWizard } from "@/components/admissions/application-wizard";
import { getProgramBySlug } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Apply",
  description: "Start your PenCap Institute application — a short, step-by-step form, never one long page.",
  alternates: { canonical: "/admissions/apply" },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program: programParam } = await searchParams;
  const program = programParam ? getProgramBySlug(programParam) : undefined;

  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <SectionEyebrow>Admissions · Application</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Your application
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          Four short steps. Your progress is saved automatically as you go, so it&rsquo;s safe to
          come back and finish later.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl">
        <ApplicationWizard defaultProgramSlug={program?.slug} />
      </div>
    </div>
  );
}

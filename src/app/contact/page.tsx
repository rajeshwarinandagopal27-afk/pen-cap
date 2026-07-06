import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { ContactForm } from "@/components/marketing/contact-form";
import { getProgramBySlug } from "@/lib/data/programs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a PenCap Institute admissions advisor or our enterprise training team.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string; intent?: string }>;
}) {
  const { program: programParam, intent } = await searchParams;
  const program = programParam ? getProgramBySlug(programParam) : undefined;

  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <SectionEyebrow>Contact</SectionEyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Talk to a real person
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          Whether you&rsquo;re deciding between programs or exploring training for your team, tell
          us a bit about what you need and we&rsquo;ll route it to the right person.
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          Prefer email? Reach us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-accent hover:underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-10">
        <ContactForm
          defaultIntent={intent === "enterprise" ? "enterprise" : "enroll"}
          programHint={program?.name}
        />
      </div>
    </div>
  );
}

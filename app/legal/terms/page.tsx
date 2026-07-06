import type { Metadata } from "next";

import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the PenCap Institute of Excellence website and programs.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40">
      <div className="container-page">
        <span className="eyebrow">Legal</span>
        <h1 className="type-display-xl mt-3 text-[var(--color-text-primary)]">Terms of Service</h1>
        <p className="type-body-sm mt-2 text-[var(--color-text-muted)]">Last updated: January 2026</p>

        <div className="reading-measure mt-10 flex flex-col gap-8 type-body-md text-[var(--color-text-secondary)]">
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Enrollment agreement</h2>
            <p className="mt-3">
              Enrolling in a PenCap program constitutes acceptance of the program-specific
              enrollment agreement presented during checkout, including tuition, the financing
              option you select, and our refund policy (see the Pricing & Financing page). These
              Terms of Service govern general use of the website; the enrollment agreement governs
              your specific program relationship where the two differ.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Acceptable use</h2>
            <p className="mt-3">
              The PenCap Cyber Range and any lab environments are provided solely for authorized
              educational practice. You may not use techniques learned through PenCap programs or
              the Cyber Range against any system you do not own or have explicit written
              authorization to test. Sharing Cyber Range or course credentials, redistributing
              course materials, or attempting to access other learners&rsquo; data is prohibited and
              may result in removal from a program without refund.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Certifications & outcomes</h2>
            <p className="mt-3">
              CEH, C|ND, and CompTIA certifications are issued by EC-Council and CompTIA
              respectively upon passing their official exams — PenCap facilitates training and exam
              vouchers but does not guarantee exam results. Our published placement and salary
              statistics reflect historical cohort outcomes calculated per the methodology on our
              Outcomes page and do not guarantee individual results.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Intellectual property</h2>
            <p className="mt-3">
              All course content, curriculum materials, and Cyber Range challenges are the
              intellectual property of PenCap Institute of Excellence or its licensors and are
              licensed to enrolled learners for personal, non-commercial educational use only.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Limitation of liability</h2>
            <p className="mt-3">
              PenCap is not liable for indirect or consequential damages arising from use of the
              website, Cyber Range, or program content, to the maximum extent permitted under
              applicable Indian law.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of India, with courts in Chennai, Tamil Nadu
              having exclusive jurisdiction over any dispute.
            </p>
          </div>
          <div>
            <h2 className="type-display-sm text-[var(--color-text-primary)]">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to {site.email}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

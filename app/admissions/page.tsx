import type { Metadata } from "next";

import { AdmissionsFunnel } from "@/components/admissions/admissions-funnel";

export const metadata: Metadata = {
  title: "Apply — Admissions",
  description:
    "Start with a 2-minute eligibility check, no signup required. See your recommended program, then continue to a full application at your own pace.",
  alternates: { canonical: "/admissions" },
  robots: { index: false, follow: true },
};

export default function AdmissionsPage() {
  return <AdmissionsFunnel />;
}

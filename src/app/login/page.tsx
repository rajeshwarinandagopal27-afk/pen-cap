import type { Metadata } from "next";

import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { LoginForm } from "@/components/marketing/login-form";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to the PenCap Institute student portal.",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <div className="container-page flex flex-col items-center py-20 sm:py-28">
      <div className="w-full max-w-sm text-center">
        <SectionEyebrow>Student portal</SectionEyebrow>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary">
          Log in
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          The student portal is passwordless — enter the email you used to apply or enroll and
          we&rsquo;ll send you a one-time sign-in link.
        </p>
        <div className="mt-8 text-left">
          <LoginForm />
        </div>
        <p className="mt-6 text-xs text-text-muted">
          Not a student yet?{" "}
          <a href="/admissions" className="font-medium text-accent hover:underline">
            Start your application
          </a>{" "}
          instead.
        </p>
      </div>
    </div>
  );
}

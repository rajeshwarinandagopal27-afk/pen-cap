import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ScheduleCallDialog } from "@/components/enterprise/schedule-call-dialog";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PenCap Institute of Excellence — start your enrollment path, book an enterprise call, or reach us directly in Chennai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-page">
          <span className="eyebrow">Contact</span>
          <h1 className="type-display-xl mt-3 max-w-2xl text-[var(--color-text-primary)]">
            Tell us which conversation you&rsquo;re here for.
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal className="flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)] p-8">
              <div>
                <span className="eyebrow">Individual</span>
                <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
                  I want to talk about enrolling.
                </h2>
                <p className="type-body-md mt-3 text-[var(--color-text-secondary)]">
                  Start with a 2-minute eligibility check — no signup, no fee — and get a
                  recommendation before you talk to anyone.
                </p>
              </div>
              <Button asChild size="lg" className="mt-6 w-fit">
                <Link href="/admissions">
                  Check your eligibility <ArrowRight />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.06} className="flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)] p-8">
              <div>
                <span className="eyebrow">Enterprise</span>
                <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">
                  I&rsquo;m exploring team or enterprise training.
                </h2>
                <p className="type-body-md mt-3 text-[var(--color-text-secondary)]">
                  Tell us about your team and we&rsquo;ll set up a 30-minute call with our enterprise
                  lead within 1 business day.
                </p>
              </div>
              <div className="mt-6">
                <ScheduleCallDialog triggerLabel="Book a call" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 lg:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Something else?</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">Send us a message.</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="eyebrow">Direct</span>
            <h2 className="type-display-sm mt-3 text-[var(--color-text-primary)]">Reach us directly.</h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="type-body-sm text-[var(--color-text-muted)]">Admissions</p>
                  <a href={`mailto:${site.email}`} className="type-body-md text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="type-body-sm text-[var(--color-text-muted)]">Phone</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="type-body-md text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="type-body-sm text-[var(--color-text-muted)]">Campus</p>
                  <p className="type-body-md text-[var(--color-text-primary)]">{site.address}</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ShieldHalf } from "lucide-react";

import { footerSitemap } from "@/lib/data/nav";
import { NewsletterForm } from "@/components/marketing/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-text-primary">
            <ShieldHalf className="size-6 text-accent" aria-hidden="true" />
            PenCap Institute
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Cohort-based cybersecurity education, backed by a published placement rate and taught
            by practitioners. Proof, not promises.
          </p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.entries(footerSitemap).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{section}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border-muted">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} PenCap Institute of Excellence. All rights reserved.</p>
          <p>Accredited continuing-education provider · Outcomes independently reviewed annually</p>
        </div>
      </div>
    </footer>
  );
}

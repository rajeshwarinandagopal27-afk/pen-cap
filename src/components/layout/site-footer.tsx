import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { ParticleField } from "@/components/motion/particle-field";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-surface bg-noise">
      {/* animated ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-20" />
        <div className="ambient left-1/2 top-[-30%] h-[360px] w-[680px] -translate-x-1/2 opacity-25" />
        <ParticleField count={36} className="absolute inset-0 h-full w-full opacity-60" />
      </div>

      {/* Link columns */}
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo withDescriptor />
          <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
            Electronic-component sourcing and distribution for OEMs, EMS providers and engineering teams —
            RFQ-based, not retail.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{siteConfig.tagline}</p>
        </div>

        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">{col.heading}</h3>
            {col.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ))}

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">Contact</h3>
          <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
            <Mail className="size-4 text-text-muted" /> {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary">
            <Phone className="size-4 text-text-muted" /> {siteConfig.contact.phone}
          </a>
          <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <MapPin className="size-4 text-text-muted" /> {siteConfig.contact.address}
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">Sourced with Precision</p>
        </div>
      </div>
    </footer>
  );
}

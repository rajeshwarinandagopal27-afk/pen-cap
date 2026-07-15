import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      {/* CTA band */}
      <div className="border-b border-border">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
              Have a BOM or a shortage? Let&apos;s quote it.
            </h2>
            <p className="mt-2 text-text-secondary">
              Send us a part number or upload a bill of materials — quoted with lead times, fast.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link href="/request-rfq">Request an RFQ</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Talk to sourcing</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo withDescriptor />
          <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
            Premium electronic-components sourcing and distribution for India&apos;s manufacturers, OEMs and R&amp;D teams.
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

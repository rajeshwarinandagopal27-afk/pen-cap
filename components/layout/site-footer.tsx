"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Logo } from "@/components/layout/logo";
import { LinkedinIcon, XIcon, YoutubeIcon, InstagramIcon } from "@/components/layout/social-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerSitemap } from "@/lib/data/nav";
import { site } from "@/lib/data/site";

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("You're subscribed — outcomes reports and cohort dates land in your inbox.");
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:max-w-sm">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <Input
        id="footer-email"
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:flex-1"
      />
      <Button type="submit" variant="secondary" loading={loading} className="shrink-0">
        Subscribe <ArrowRight />
      </Button>
    </form>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="type-body-sm text-[var(--color-text-secondary)] max-w-xs">
              {site.tagline} {site.subline}
            </p>
            <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
              <a href={site.social.linkedin} aria-label="PenCap on LinkedIn" className="hover:text-[var(--color-text-primary)] transition-colors">
                <LinkedinIcon className="size-5" />
              </a>
              <a href={site.social.twitter} aria-label="PenCap on X" className="hover:text-[var(--color-text-primary)] transition-colors">
                <XIcon className="size-5" />
              </a>
              <a href={site.social.youtube} aria-label="PenCap on YouTube" className="hover:text-[var(--color-text-primary)] transition-colors">
                <YoutubeIcon className="size-5" />
              </a>
              <a href={site.social.instagram} aria-label="PenCap on Instagram" className="hover:text-[var(--color-text-primary)] transition-colors">
                <InstagramIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerSitemap).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-3">
                <span className="type-body-xs font-medium text-[var(--color-text-muted)]">{heading}</span>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="type-body-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="type-body-xs font-medium text-[var(--color-text-muted)]">
              Get outcomes reports and cohort dates
            </span>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--color-border-muted)] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.accreditations.map((a) => (
              <span key={a.abbr} className="type-body-xs text-[var(--color-text-muted)]">
                {a.name}
              </span>
            ))}
          </div>
          <p className="type-body-xs text-[var(--color-text-muted)]">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };

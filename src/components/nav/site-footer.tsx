import Link from "next/link";
import { ShieldCheckIcon, MapPinIcon, PhoneCallIcon, MailIcon } from "lucide-react";

import { mainNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";

const programLinks = mainNav.find((item) => item.label === "Courses")?.children ?? [];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-950 text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white text-navy-950">
                <ShieldCheckIcon className="size-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Pen<span className="text-royal-400">Cap</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: siteConfig.social.linkedin, label: "LinkedIn", short: "in" },
                { href: siteConfig.social.instagram, label: "Instagram", short: "ig" },
                { href: siteConfig.social.youtube, label: "YouTube", short: "yt" },
                { href: siteConfig.social.facebook, label: "Facebook", short: "fb" },
              ].map(({ href, label, short }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/5 text-xs font-semibold uppercase text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Programs</h3>
            <ul className="mt-4 space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Institute</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Campus", href: "/campus" },
                { label: "Placements", href: "/placements" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blogs", href: "/blogs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-royal-400" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.pincode}
                </span>
              </li>
              <li className="flex gap-2">
                <PhoneCallIcon className="size-4 shrink-0 text-royal-400" />
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <MailIcon className="size-4 shrink-0 text-royal-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}

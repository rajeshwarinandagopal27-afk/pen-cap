import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cybersecurity Training, Chennai | EC-Council & CompTIA Accredited`,
    template: `%s | ${site.name}`,
  },
  description:
    "PenCap Institute of Excellence trains security operators, not test-takers. EC-Council Accredited Training Center and CompTIA Authorized Training Partner in Chennai — published placement rates, named practitioner faculty, and a live-fire Cyber Range you can try before you enroll.",
  keywords: [
    "cybersecurity training Chennai",
    "ethical hacking course India",
    "CEH certification Chennai",
    "CompTIA Security+ training",
    "penetration testing course",
    "cybersecurity institute India",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Proof, not promises.`,
    description:
      "Published placement rates, named practitioner faculty, and a live-fire Cyber Range you can try before you enroll.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Proof, not promises.`,
    description:
      "Published placement rates, named practitioner faculty, and a live-fire Cyber Range you can try before you enroll.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tidel Park, Module 14, 2nd Floor, Taramani",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [site.social.linkedin, site.social.twitter, site.social.youtube, site.social.instagram],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[400] focus:rounded-[var(--radius-sm)] focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:type-body-sm focus:font-medium focus:text-[var(--ink-950)]"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

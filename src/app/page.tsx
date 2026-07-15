import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { ManufacturerMarquee } from "@/components/home/manufacturer-marquee";
import { ProductCategories } from "@/components/home/product-categories";
import { WhySlt } from "@/components/home/why-slt";
import { Industries } from "@/components/home/industries";
import { RfqProcess } from "@/components/home/rfq-process";
import { Testimonials } from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  slogan: siteConfig.tagline,
  areaServed: "IN",
  knowsAbout: [
    "Electronic components distribution",
    "Semiconductor sourcing",
    "BOM sourcing",
    "Integrated circuits",
    "Microcontrollers",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ManufacturerMarquee />
      <ProductCategories />
      <WhySlt />
      <Industries />
      <RfqProcess />
      <Testimonials />
    </>
  );
}

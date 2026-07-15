import { Hero } from "@/components/home/hero";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhySlt } from "@/components/home/why-slt";
import { ProductCategories } from "@/components/home/product-categories";
import { Industries } from "@/components/home/industries";
import { GlobalSourcingTeaser } from "@/components/home/global-sourcing-teaser";
import { SupplyChainTeaser } from "@/components/home/supply-chain-teaser";
import { QualityTeaser } from "@/components/home/quality-teaser";
import { WorkflowSection } from "@/components/home/workflow-section";
import { ManufacturerMarquee } from "@/components/home/manufacturer-marquee";
import { CtaBand } from "@/components/common/cta-band";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

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
    "Electronic component sourcing",
    "BOM fulfilment",
    "Bulk procurement",
    "Alternative part sourcing",
    "Obsolete component sourcing",
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <WhoWeAre />
      <WhySlt />
      <ProductCategories />
      <Industries />
      <GlobalSourcingTeaser />
      <SupplyChainTeaser />
      <QualityTeaser />
      <WorkflowSection />
      <ManufacturerMarquee />
      <CtaBand />
    </>
  );
}

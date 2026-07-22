import { CinematicHero } from "@/components/home/cinematic-hero";
import { WhoWeAre } from "@/components/home/who-we-are";
import { ProductBlocks } from "@/components/home/product-blocks";
import { GlobalSourcing } from "@/components/home/global-sourcing";
import { WorkflowTimeline } from "@/components/home/workflow-timeline";
import { WhyChoose } from "@/components/home/why-choose";
import { ManufacturerWall } from "@/components/home/manufacturer-wall";
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
      <CinematicHero />
      <WhoWeAre />
      <ProductBlocks />
      <GlobalSourcing />
      <WorkflowTimeline />
      <WhyChoose />
      <ManufacturerWall />
      <CtaBand />
    </>
  );
}

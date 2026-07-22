import { PageHero } from "@/components/common/page-hero";
import { TrustBadges } from "@/components/common/trust-badges";
import { CtaBand } from "@/components/common/cta-band";
import { ProductsAccordion } from "@/components/products/products-accordion";
import { productCategories } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Product Categories",
  description:
    "Thirteen electronic component categories sourced by SLT Technology — integrated circuits, microcontrollers, power ICs, semiconductors, sensors, connectors, passives and more. RFQ-based, no online purchasing.",
  path: "/products",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: productCategories.map((cat, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cat.name,
    url: `${siteConfig.url}/products#${cat.slug}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Product Categories"
        motif="chipgrid"
        title="Thirteen categories. No catalogue, no cart."
        description="Each category below is a sourcing capability, not a parts list. Expand a category for applications, industries served, and how to get a quote."
      />
      <section className="container-page py-14 sm:py-16">
        <TrustBadges />
        <div className="mt-10">
          <ProductsAccordion />
        </div>
      </section>
      <CtaBand
        title="Don't see your exact requirement?"
        description="If it's an electronic component, there's a good chance we can source it. Send us the spec."
      />
    </>
  );
}

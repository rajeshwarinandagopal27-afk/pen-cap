import { PageHero } from "@/components/common/page-hero";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the SLT Technology website and the RFQ process.",
  path: "/terms",
});

const updated = "15 July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description={`Last updated ${updated}`} />
      <section className="container-page py-16 sm:py-20">
        <div className="container-reading flex flex-col gap-8 text-text-secondary [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-text-primary [&_p]:leading-relaxed [&_li]:leading-relaxed">
          <div>
            <h2>About this website</h2>
            <p>
              This website is operated by {siteConfig.name} to describe our B2B electronic-component sourcing and
              distribution capabilities and to receive requests for quotation (RFQs). It is not an e-commerce
              platform: no prices, stock quantities, purchases or payments are transacted through this website.
            </p>
          </div>
          <div>
            <h2>Nature of quotations</h2>
            <p>
              Information on this website — including product category descriptions and manufacturer listings — is
              provided for general reference only and does not constitute a binding offer, quotation or guarantee
              of availability, pricing or lead time. A binding quotation is issued only in writing, in response to a
              specific RFQ, following review by our sourcing team.
            </p>
          </div>
          <div>
            <h2>Manufacturer references</h2>
            <p>
              Manufacturer and brand names referenced on this website identify product lines we may source and are
              used for identification purposes only. Their use does not state or imply that {siteConfig.name} is an
              authorized distributor, partner or representative of any named manufacturer, unless explicitly
              confirmed in writing.
            </p>
          </div>
          <div>
            <h2>Submissions</h2>
            <p>
              By submitting an RFQ, a bill of materials, or a contact form on this website, you confirm that the
              information provided is accurate to the best of your knowledge and that you are authorized to submit
              it on behalf of your organization.
            </p>
          </div>
          <div>
            <h2>Intellectual property</h2>
            <p>
              The content, design and branding of this website are the property of {siteConfig.name} unless
              otherwise noted, and may not be reproduced without permission.
            </p>
          </div>
          <div>
            <h2>Limitation of liability</h2>
            <p>
              This website and its content are provided on an &quot;as is&quot; basis. {siteConfig.name} makes no
              warranty as to the completeness or accuracy of category, industry or manufacturer information
              presented here, which is descriptive rather than transactional.
            </p>
          </div>
          <div>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws of India, without regard to conflict-of-law principles.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-brand hover:underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

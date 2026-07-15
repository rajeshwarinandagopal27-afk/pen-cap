import { PageHero } from "@/components/common/page-hero";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How SLT Technology collects, uses and protects information submitted through this website.",
  path: "/privacy",
});

const updated = "15 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={`Last updated ${updated}`} />
      <section className="container-page py-16 sm:py-20">
        <div className="container-reading flex flex-col gap-8 text-text-secondary [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-text-primary [&_p]:leading-relaxed [&_li]:leading-relaxed">
          <div>
            <h2>Information we collect</h2>
            <p>
              When you submit an RFQ, upload a bill of materials, or contact us through this website, we collect the
              information you provide directly — including company name, contact person, email address, phone
              number, country, state, industry, requested delivery date, any file you upload, and any additional
              notes you include.
            </p>
          </div>
          <div>
            <h2>How we use this information</h2>
            <p>We use the information submitted to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Review and respond to RFQs, BOM uploads and general enquiries</li>
              <li>Prepare quotations and communicate about sourcing requests</li>
              <li>Maintain records of correspondence for ongoing sourcing relationships</li>
            </ul>
            <p>
              We do not sell, rent or trade the information you submit to third parties for their own marketing
              purposes.
            </p>
          </div>
          <div>
            <h2>Uploaded files</h2>
            <p>
              Bills of materials or other documents uploaded through this website are used solely to prepare a
              quotation or respond to your request, and are retained only as long as reasonably necessary for that
              purpose.
            </p>
          </div>
          <div>
            <h2>Cookies and site functionality</h2>
            <p>
              This website may use strictly necessary cookies or similar local storage required for core
              functionality, such as remembering your display theme preference. We do not currently use these
              mechanisms for advertising or cross-site tracking.
            </p>
          </div>
          <div>
            <h2>Data retention</h2>
            <p>
              Information submitted through this website is retained for as long as necessary to respond to your
              request and maintain business records, after which it may be securely deleted or anonymised.
            </p>
          </div>
          <div>
            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information you have submitted
              to us by contacting <a href={`mailto:${siteConfig.contact.email}`} className="text-brand hover:underline">{siteConfig.contact.email}</a>.
            </p>
          </div>
          <div>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices. The date at the top
              of this page indicates when it was last revised.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to{" "}
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

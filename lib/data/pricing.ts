export const financingOptions = [
  {
    id: "pay-in-full",
    name: "Pay in full",
    description: "One upfront payment, with a 6% discount versus the EMI total.",
    detail: "The lowest total cost. Refundable per our standard 10%-of-cohort refund window.",
  },
  {
    id: "emi",
    name: "0%-markup EMI",
    description: "3, 6, or 12-month installment plans through our two NBFC lending partners.",
    detail:
      "No markup added by PenCap — you pay the lender's standard processing fee only (typically 1-2% of loan value), disclosed by the lender before you sign.",
  },
  {
    id: "isa",
    name: "Income-share agreement (Offensive Security Program only)",
    description:
      "No upfront tuition. Pay 12% of your income for 30 months, only once you're earning above ₹4,00,000/year — and only up to a repayment cap of 1.4x tuition.",
    detail:
      "If you're never placed above the income threshold, you owe nothing further after 48 months. Full terms, including the repayment cap and hardship pause option, are in the ISA agreement we review with you before signing — not just in a footnote.",
  },
  {
    id: "employer-sponsorship",
    name: "Employer sponsorship",
    description: "A sponsorship letter template and invoicing support for employers funding your enrollment.",
    detail: "Common for GRC & Compliance and Cloud & DevSecOps enrollees sponsored by their current employer.",
  },
] as const;

export const refundPolicy = {
  headline: "Withdraw within the first 10% of your cohort for a full refund, minus a processing fee.",
  detail:
    "For the Offensive Security Program (24 weeks), that's the first 17 days. For an 8-week program, that's the first 6 days. After that window, tuition is non-refundable except in the case of a documented medical or family emergency, reviewed case-by-case by admissions within 5 business days.",
  processingFee: "₹2,500 processing fee applies to all refunds, deducted from the refunded amount.",
};

export const comparisonRows = [
  {
    label: "Published placement rate",
    pencap: "Yes — 89%, audited annually",
    selfStudy: "N/A",
    genericBootcamp: "Rarely published, or unaudited",
  },
  {
    label: "Live-fire practice environment",
    pencap: "Yes — PenCap Cyber Range, free to try",
    selfStudy: "Depends on self-sourced tools",
    genericBootcamp: "Usually static, pre-recorded labs",
  },
  {
    label: "Named, credentialed faculty",
    pencap: "Yes — CVEs, employers, and titles listed publicly",
    selfStudy: "N/A",
    genericBootcamp: "Often anonymized \"expert instructors\"",
  },
  {
    label: "Cohort size",
    pencap: "Capped at 35-80 depending on program (1:12 mentor ratio)",
    selfStudy: "N/A",
    genericBootcamp: "Often uncapped or unpublished",
  },
  {
    label: "Transparent, listed pricing",
    pencap: "Yes — every program, no \"contact us\" pricing",
    selfStudy: "Free to low-cost",
    genericBootcamp: "Frequently requires a sales call",
  },
  {
    label: "Refund/guarantee policy",
    pencap: "Published in plain language on this page",
    selfStudy: "N/A",
    genericBootcamp: "Often vague or absent",
  },
];

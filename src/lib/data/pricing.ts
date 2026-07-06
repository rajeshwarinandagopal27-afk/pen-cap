export const financingOptions = [
  {
    title: "Pay in full",
    description: "Pay your full tuition before your cohort begins and receive a 5% discount.",
    detail: "5% discount applied at checkout",
  },
  {
    title: "Installment plan",
    description: "Split tuition into 12 equal monthly payments at 0% APR, starting the month your cohort begins.",
    detail: "0% APR, 12 monthly payments",
  },
  {
    title: "Income share agreement",
    description:
      "Pay $0 upfront. Once you're placed in a security role earning at least $50,000/year, pay 10% of your salary for 24 months, capped at 1.4x tuition.",
    detail: "$0 upfront · payments begin only after placement above $50k",
  },
  {
    title: "Employer sponsorship",
    description: "Have your employer sponsor your enrollment directly, with a ready-to-send sponsorship letter template and consolidated invoicing.",
    detail: "Direct invoicing to your employer",
  },
];

export const guarantee = {
  title: "The PenCap Placement Guarantee",
  body: "If you complete every module, attend every scheduled mentor session, and are not placed in a security role within 6 months of graduating, we refund 100% of your tuition. No appeals process, no fine print beyond what's stated here.",
  trialNote: "Separately, every enrollment includes a 14-day, no-questions-asked refund window from your enrollment date.",
};

export const pricingComparison = {
  columns: ["PenCap Institute", "Self-taught", "Generic bootcamp"],
  rows: [
    { label: "Published, audited placement rate", values: [true, false, false] },
    { label: "Named, practitioner faculty", values: [true, false, false] },
    { label: "Live mentor feedback on your work", values: [true, false, "Limited"] },
    { label: "Hands-on lab environment included", values: [true, "Varies", true] },
    { label: "Placement guarantee", values: [true, false, "Rare"] },
    { label: "Structured curriculum with capstone", values: [true, false, true] },
    { label: "Typical total cost", values: ["$8,900–$17,500", "$0–$2,000", "$10,000–$20,000"] },
  ],
};

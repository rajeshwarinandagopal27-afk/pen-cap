export interface FaqItem {
  question: string;
  answer: string;
}

export const homepageFaq: FaqItem[] = [
  {
    question: "How much does it actually cost, all-in?",
    answer:
      "Tuition ranges from ₹42,000 for Security+ Foundations to ₹2,85,000 for the full Offensive Security Program, with no hidden fees — exam vouchers, Cyber Range access, and career services are included in every listed price. Full financing details, including 0%-markup EMI and income-share options, are on our Pricing & Financing page.",
  },
  {
    question: "How much time do I need to commit each week?",
    answer:
      "Between 8 and 22 hours a week depending on the program, designed to run alongside a full-time job. Cohort sessions are scheduled on weekday evenings (IST) and weekends specifically so working professionals don't have to take leave to attend live sessions.",
  },
  {
    question: "Do I need a technical background to start?",
    answer:
      "No — CompTIA Security+ Foundations is built for people with zero IT background. If you already have 1-3 years in IT or software, our eligibility check (2 minutes, no signup) will usually route you straight to CEH or the Offensive Security Program instead.",
  },
  {
    question: "What happens if I don't get placed?",
    answer:
      "Career services support — resume review, mock interviews, and warm introductions to our 210+ hiring partners — continues for 12 months past graduation at no extra cost, for as long as you're actively job-seeking. Our refund and guarantee policy, including the conditions under which a partial refund applies, is stated in full on the Pricing page — not buried in a terms document.",
  },
  {
    question: "Is EMI or income-share financing actually available, or is that just marketing language?",
    answer:
      "Yes. We partner with two NBFC lending partners for 0%-markup EMI plans from ₹3,500/month, and offer a income-share agreement on the Offensive Security Program for applicants who qualify. Every term, including the APR-equivalent and ISA repayment cap, is disclosed in plain language on the Pricing & Financing page before you apply — not after.",
  },
  {
    question: "Are your certifications recognized outside India?",
    answer:
      "Yes — CEH, C|ND, and CompTIA Security+/PenTest+/Cloud+ are globally recognized vendor certifications, not PenCap-issued credentials. As an official EC-Council Accredited Training Center and CompTIA Authorized Training Partner, our exam vouchers and training map directly to the official global exam blueprints.",
  },
  {
    question: "Can I study fully online, or do I need to visit the Chennai campus?",
    answer:
      "Every program runs fully online with live instruction — the Chennai campus (Tidel Park, Taramani) is used for optional in-person cohort days and is not required to complete any program. If you'd like to visit before enrolling, admissions can arrange a campus tour on request.",
  },
  {
    question: "What if I enroll and it's not the right fit?",
    answer:
      "You can withdraw within the first 10% of any cohort's duration for a full tuition refund minus a processing fee, no questions asked. Full terms are on the Pricing page.",
  },
];

export const cyberRangeFaq: FaqItem[] = [
  {
    question: "Do I need to create an account to try a challenge?",
    answer:
      "No — your first challenge in every category is open with no signup. We only ask you to create a free account to save progress past your first solve.",
  },
  {
    question: "Is the Cyber Range only for enrolled students?",
    answer:
      "No — anyone can practice. Enrolled students get access to the full challenge library, graded engagements tied to their curriculum, and instructor-reviewed write-ups; free accounts get the public challenge set.",
  },
  {
    question: "How often are new challenges added?",
    answer:
      "Weekly. Faculty retire challenges that become too widely walked-through and rotate in new vulnerable environments, including fresh CVEs faculty have personally worked with.",
  },
];

export const enterpriseFaq: FaqItem[] = [
  {
    question: "Can you deliver training on-site at our office?",
    answer:
      "Yes — on-site delivery is available in Chennai, Bengaluru, and Hyderabad, and we can scope other cities for cohorts of 15 or more.",
  },
  {
    question: "Can this map to our compliance training requirements?",
    answer:
      "Yes — our enterprise curriculum can be mapped to ISO 27001 Annex A competency requirements, NIST CSF workforce development guidance, and RBI/SEBI cybersecurity training mandates for regulated entities, with documentation your auditors can use directly.",
  },
  {
    question: "Do you offer a pilot before a full team commitment?",
    answer:
      "Yes — most enterprise engagements start with a single pilot cohort of 8-15 engineers over one quarter, with a joint review before scaling further.",
  },
];

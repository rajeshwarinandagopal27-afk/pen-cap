export interface Testimonial {
  id: string;
  name: string;
  program: string;
  programSlug: string;
  role: string;
  company: string;
  quote: string;
  outcomeChip: string;
  background: "Career changer" | "Military transition" | "Self-taught" | "Recent graduate";
  initials: string;
  video?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "priyanka-sundaram",
    name: "Priyanka Sundaram",
    program: "Offensive Security Program",
    programSlug: "offensive-security-program",
    role: "Associate Penetration Tester",
    company: "Deloitte India",
    quote:
      "I was a manual QA tester for four years with no security background. The Cyber Range engagements are what got me through the interviews — I could talk through a real Active Directory attack path instead of reciting definitions.",
    outcomeChip: "Placed in 9 weeks",
    background: "Career changer",
    initials: "PS",
  },
  {
    id: "harish-balamurugan",
    name: "Harish Balamurugan",
    program: "Certified Ethical Hacker (CEH v13)",
    programSlug: "certified-ethical-hacker",
    role: "Security Analyst",
    company: "Wipro",
    quote:
      "I'd failed a CEH attempt on my own the year before. PenCap's cohort structure and weekly mock exams were the difference — I passed on the first attempt this time and had two offers within six weeks of certifying.",
    outcomeChip: "Placed in 6 weeks",
    background: "Self-taught",
    initials: "HB",
  },
  {
    id: "captain-vikram-menon",
    name: "Vikram Menon",
    program: "Certified Network Defender (C|ND)",
    programSlug: "certified-network-defender",
    role: "SOC Analyst II",
    company: "HCLTech",
    quote:
      "I left the Indian Army after eleven years and had zero civilian IT experience on paper. The admissions team mapped my signals background to the C|ND curriculum directly, and faculty were the first people who took that transition seriously instead of just nodding at it.",
    outcomeChip: "Placed in 14 weeks",
    background: "Military transition",
    initials: "VM",
    video: true,
  },
  {
    id: "ananya-krishnan",
    name: "Ananya Krishnan",
    program: "CompTIA Security+ Foundations",
    programSlug: "security-plus-foundations",
    role: "Junior GRC Analyst",
    company: "Zoho Corporation",
    quote:
      "I came in with a commerce degree and no coding background at all. Security+ Foundations was paced exactly right — by week 6 I understood enough to know I wanted the GRC track, not offensive work, and PenCap's advisors actually encouraged that instead of upselling me.",
    outcomeChip: "Placed in 11 weeks",
    background: "Career changer",
    initials: "AK",
  },
  {
    id: "sanjay-iyer",
    name: "Sanjay Iyer",
    program: "Cloud & DevSecOps Security Program",
    programSlug: "cloud-devsecops-program",
    role: "Cloud Security Engineer",
    company: "Freshworks",
    quote:
      "I'd been a DevOps engineer for three years and wanted to specialize rather than start over. This program respected that — no wasted weeks on basics I already knew, straight into Kubernetes attack paths and pipeline hardening.",
    outcomeChip: "Placed in 5 weeks",
    background: "Career changer",
    initials: "SI",
  },
  {
    id: "farida-shaikh",
    name: "Farida Shaikh",
    program: "Offensive Security Program",
    programSlug: "offensive-security-program",
    role: "Penetration Tester",
    company: "Cognizant",
    quote:
      "I applied to three other bootcamps and PenCap was the only one that told me, in the eligibility check, that I should do Security+ first. I did, then came back for OSP eight months later. That honesty is why I trusted the placement numbers when I finally saw them.",
    outcomeChip: "Placed in 8 weeks",
    background: "Recent graduate",
    initials: "FS",
  },
];

export function getTestimonialsForProgram(slug: string) {
  return testimonials.filter((t) => t.programSlug === slug);
}

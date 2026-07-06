export const site = {
  name: "PenCap Institute of Excellence",
  shortName: "PenCap",
  tagline: "Proof, not promises.",
  subline:
    "We publish our placement rate, our salary data, and our instructors' CVEs. Decide for yourself.",
  url: "https://www.pencap.in",
  email: "admissions@pencap.in",
  enterpriseEmail: "enterprise@pencap.in",
  phone: "+91 44 4612 0071",
  address: "PenCap Institute of Excellence, Tidel Park, Module 14, 2nd Floor, Taramani, Chennai 600113",
  social: {
    linkedin: "https://www.linkedin.com/company/pencap-institute",
    twitter: "https://x.com/pencapinstitute",
    youtube: "https://www.youtube.com/@pencapinstitute",
    instagram: "https://www.instagram.com/pencapinstitute",
  },
  accreditations: [
    {
      name: "EC-Council Accredited Training Center",
      abbr: "EC-Council ATC",
    },
    {
      name: "CompTIA Authorized Training Partner",
      abbr: "CompTIA ATP",
    },
    {
      name: "NASSCOM FutureSkills Prime Partner",
      abbr: "NASSCOM FSP",
    },
  ],
} as const;

export const heroTrustLogos = [
  "TCS",
  "Deloitte",
  "Zoho",
  "Freshworks",
  "Cisco",
  "Wipro",
  "Cognizant",
  "HCLTech",
] as const;

export const homepageStats = [
  {
    id: "placement-rate",
    value: 89,
    suffix: "%",
    label: "Graduates placed within 180 days",
    footnote: "2025 cohorts, self-reported and spot-audited by an independent verifier",
  },
  {
    id: "time-to-placement",
    value: 71,
    suffix: " days",
    label: "Median time to placement",
    footnote: "From graduation date to signed offer letter",
  },
  {
    id: "salary-lift",
    value: 46,
    suffix: "%",
    label: "Median salary increase",
    footnote: "Comparing pre-enrollment CTC to first security role CTC",
  },
  {
    id: "alumni",
    value: 1840,
    suffix: "+",
    label: "Alumni working in security roles",
    footnote: "Across 210+ employers since 2019",
  },
] as const;

export const differentiators = [
  {
    id: "cyber-range",
    title: "PenCap Cyber Range",
    claim:
      "A live-fire practice environment you can try before you enroll — real vulnerable infrastructure, not slideshow labs.",
    stat: "140+",
    statLabel: "practice challenges, added weekly",
    href: "/cyber-range",
  },
  {
    id: "faculty",
    title: "Practitioner faculty",
    claim:
      "Every instructor still works, or recently worked, offensive or defensive security for a living — named, credentialed, credited.",
    stat: "23",
    statLabel: "CVEs credited to current faculty",
    href: "/about",
  },
  {
    id: "outcomes",
    title: "Audited outcomes",
    claim:
      "Placement rate, salary delta, and methodology, published in full and reviewed by an independent auditor every year.",
    stat: "89%",
    statLabel: "placement rate, published since 2021",
    href: "/outcomes",
  },
  {
    id: "cohorts",
    title: "Small cohorts",
    claim:
      "Cohorts are capped so mentors know your name and your work — not a lecture hall with a login.",
    stat: "1:12",
    statLabel: "mentor-to-learner ratio",
    href: "/programs",
  },
] as const;

export const admissionsSteps = [
  {
    step: 1,
    title: "Apply",
    description: "A 12-minute eligibility check — no essay, no fee, no account required.",
  },
  {
    step: 2,
    title: "Assess",
    description: "A short, adaptive skills baseline calibrated to your starting point.",
  },
  {
    step: 3,
    title: "Interview",
    description: "A 30-minute call with admissions faculty, booked instantly on your calendar.",
  },
  {
    step: 4,
    title: "Enroll",
    description: "Choose your financing option and confirm your seat in the next cohort.",
  },
] as const;

export const currentCohort = {
  program: "Offensive Security Program",
  startDate: "September 14, 2026",
  totalSeats: 40,
  seatsRemaining: 12,
} as const;

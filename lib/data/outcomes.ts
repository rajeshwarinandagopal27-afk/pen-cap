export const methodology = {
  definition:
    "“Placed” means a graduate has accepted a full-time, contract, or apprenticeship role with security responsibilities as a primary function of the job, within 180 days of their graduation date.",
  sampleSize:
    "Calculated across all 2023-2025 graduating cohorts who consented to outcome tracking (94% of all graduates).",
  exclusions:
    "Excludes graduates who deferred enrollment, took a leave of absence, or explicitly opted out of job-seeking (e.g., already employed in a non-security role by choice, or continuing to full-time study).",
  audit:
    "Self-reported outcomes are spot-audited annually by an independent verification partner against offer letters and LinkedIn employment records for a random 20% sample.",
  lastAudited: "March 2026",
};

export const placementByProgram = [
  { program: "Offensive Security Program", rate: 91, cohortSize: 214 },
  { program: "Certified Ethical Hacker", rate: 87, cohortSize: 340 },
  { program: "Certified Network Defender", rate: 82, cohortSize: 118 },
  { program: "Cloud & DevSecOps Security", rate: 84, cohortSize: 96 },
  { program: "GRC & Security Compliance", rate: 80, cohortSize: 141 },
  { program: "Security+ Foundations", rate: 76, cohortSize: 289 },
];

export const timeToPlacementDistribution = [
  { bucket: "0-30 days", percent: 22 },
  { bucket: "31-60 days", percent: 29 },
  { bucket: "61-90 days", percent: 21 },
  { bucket: "91-120 days", percent: 14 },
  { bucket: "121-180 days", percent: 9 },
  { bucket: "Not placed by day 180", percent: 5 },
];

export const salaryByYear = [
  { year: 2021, before: 420000, after: 560000 },
  { year: 2022, before: 445000, after: 620000 },
  { year: 2023, before: 468000, after: 671000 },
  { year: 2024, before: 492000, after: 712000 },
  { year: 2025, before: 510000, after: 745000 },
];

export const employerBreakdown = [
  { type: "IT services & consulting", percent: 38 },
  { type: "Product companies", percent: 27 },
  { type: "MSSP / security services", percent: 18 },
  { type: "BFSI in-house security", percent: 12 },
  { type: "Government / PSU", percent: 5 },
];

export const employerLogos = [
  "TCS",
  "Deloitte",
  "Wipro",
  "Cognizant",
  "HCLTech",
  "Zoho",
  "Freshworks",
  "Cisco",
  "Infosys",
  "Accenture",
  "KPMG India",
  "EY India",
  "Capgemini",
  "Happiest Minds",
  "Tech Mahindra",
  "IBM India",
] as const;

export const alumniStories = [
  {
    name: "Priyanka Sundaram",
    background: "Career changer",
    from: "Manual QA Tester",
    to: "Associate Penetration Tester, Deloitte India",
    program: "Offensive Security Program",
  },
  {
    name: "Vikram Menon",
    background: "Military transition",
    from: "Indian Army, Signals Corps",
    to: "SOC Analyst II, HCLTech",
    program: "Certified Network Defender",
  },
  {
    name: "Ananya Krishnan",
    background: "Career changer",
    from: "Commerce graduate, no IT background",
    to: "Junior GRC Analyst, Zoho Corporation",
    program: "Security+ Foundations",
  },
  {
    name: "Harish Balamurugan",
    background: "Self-taught",
    from: "Self-taught, failed CEH once independently",
    to: "Security Analyst, Wipro",
    program: "Certified Ethical Hacker",
  },
  {
    name: "Sanjay Iyer",
    background: "Career changer",
    from: "DevOps Engineer",
    to: "Cloud Security Engineer, Freshworks",
    program: "Cloud & DevSecOps Security Program",
  },
  {
    name: "Farida Shaikh",
    background: "Recent graduate",
    from: "B.Tech CSE graduate",
    to: "Penetration Tester, Cognizant",
    program: "Offensive Security Program",
  },
];

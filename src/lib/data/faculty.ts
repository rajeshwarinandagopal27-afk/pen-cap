import type { FacultyMember } from "@/lib/types";

export const faculty: FacultyMember[] = [
  {
    slug: "mara-ibsen",
    name: "Mara Ibsen",
    title: "Director of Offensive Security",
    credibilityLine: "Former lead, red team · Solace Financial · DEF CON 31 speaker",
    bio: "Mara spent eight years building and leading the internal red team at Solace Financial, a national retail bank, before joining PenCap full-time. She has been credited with 14 CVEs in enterprise software and spoke at DEF CON 31 on lateral movement detection blind spots in financial-services networks. She designed the Offensive Security Program's capstone engagement, modeled directly on the internal assessments she used to run.",
    credentials: ["14 CVEs credited", "DEF CON 31 speaker", "OSCP, OSCE3", "8 years leading enterprise red teams"],
    photoAlt: "Portrait of Mara Ibsen, Director of Offensive Security",
    programs: ["offensive-security-program", "advanced-red-team-certificate"],
  },
  {
    slug: "devon-okafor",
    name: "Devon Okafor",
    title: "Principal Instructor, Cloud Security",
    credibilityLine: "Former senior security engineer, AWS · fwd:cloudsec speaker",
    bio: "Devon spent six years on cloud provider security engineering teams, including three years hardening identity and access management systems at AWS. He now teaches the misconfiguration-hunting techniques he used to build internal detection tooling, and maintains an open-source scanner used to teach the Cloud Security & DevSecOps program's mid-course lab.",
    credentials: ["Former senior security engineer, AWS", "fwd:cloudsec speaker", "AWS Security Specialty, CKS", "Maintainer, open-source IAM scanner"],
    photoAlt: "Portrait of Devon Okafor, Principal Instructor of Cloud Security",
    programs: ["cloud-security-devsecops"],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Lead Instructor, SOC Analyst Accelerator",
    credibilityLine: "Former SOC manager, Northgate Health Systems · GIAC GCIH",
    bio: "Priya managed a 14-analyst security operations center for a regional hospital network for five years, where she rebuilt the alert-triage process that the SOC Analyst Accelerator's core curriculum is based on. She's especially known among students for how she teaches analysts to write incident reports that hold up in front of a CISO.",
    credentials: ["Former SOC manager, Northgate Health Systems", "GIAC GCIH, GCIA", "5 years managing 24/7 SOC operations"],
    photoAlt: "Portrait of Priya Raman, Lead Instructor of the SOC Analyst Accelerator",
    programs: ["soc-analyst-accelerator"],
  },
  {
    slug: "tomas-vukovic",
    name: "Tomas Vukovic",
    title: "Instructor, Advanced Red Team Certificate",
    credibilityLine: "9 years as a penetration tester, Ferrous Advisory · OSCE holder",
    bio: "Tomas spent nine years as a consulting penetration tester at Ferrous Advisory, running assessments for clients across banking, energy, and defense. He co-authored a 2023 research paper on evading modern EDR products during active-directory attacks, which forms the basis of the Advanced Red Team Certificate's third module.",
    credentials: ["9 years as a consulting penetration tester", "OSCP, OSCE, CRTO", "Co-author, published EDR-evasion research"],
    photoAlt: "Portrait of Tomas Vukovic, Instructor of the Advanced Red Team Certificate",
    programs: ["advanced-red-team-certificate"],
  },
  {
    slug: "lena-cho",
    name: "Lena Cho",
    title: "Instructor, Application Security",
    credibilityLine: "6 CVEs in widely used open-source libraries · Black Hat Arsenal presenter",
    bio: "Lena discovered and responsibly disclosed six vulnerabilities in open-source libraries used across the industry, including two in widely deployed authentication middleware. She presented her tooling at Black Hat Arsenal in 2024 and teaches the application-security modules embedded across every PenCap program.",
    credentials: ["6 CVEs credited", "Black Hat Arsenal presenter", "OSWE"],
    photoAlt: "Portrait of Lena Cho, Instructor of Application Security",
    programs: ["offensive-security-program", "cloud-security-devsecops", "advanced-red-team-certificate"],
  },
  {
    slug: "marcus-webb",
    name: "Marcus Webb",
    title: "Instructor, Network Security & Threat Hunting",
    credibilityLine: "Former signals-intelligence analyst · 11 years in network defense",
    bio: "Marcus spent seven years as a signals-intelligence analyst before moving into commercial threat hunting, where he built detection logic for three Fortune 500 security teams. He teaches the network-forensics labs that run through weeks 4 through 7 of the SOC Analyst Accelerator.",
    credentials: ["Former signals-intelligence analyst", "11 years in network defense", "GIAC GNFA"],
    photoAlt: "Portrait of Marcus Webb, Instructor of Network Security and Threat Hunting",
    programs: ["soc-analyst-accelerator", "advanced-red-team-certificate"],
  },
];

export function getFacultyBySlug(slug: string) {
  return faculty.find((f) => f.slug === slug);
}

export function getFacultyForProgram(programSlug: string) {
  return faculty.filter((f) => f.programs.includes(programSlug));
}

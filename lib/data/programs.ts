export type ProgramLevel = "Beginner-friendly" | "Intermediate" | "Advanced";
export type ProgramFocus = "Offensive" | "Defensive" | "GRC" | "Cloud";
export type ProgramFormat = "Cohort" | "Self-paced";

export interface CurriculumModule {
  weekRange: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Program {
  slug: string;
  category: string;
  name: string;
  shortName: string;
  tagline: string;
  outcomeStat: string;
  outcomeLabel: string;
  level: ProgramLevel;
  focus: ProgramFocus;
  format: ProgramFormat[];
  durationWeeks: number;
  hoursPerWeek: string;
  nextCohort: string;
  seatsRemaining: number;
  totalSeats: number;
  tuition: number;
  tuitionCurrency: string;
  emiFrom: number;
  skillTags: string[];
  certifications: string[];
  description: string;
  idealFor: string[];
  notIdealFor: string[];
  disqualifierNote: string;
  curriculum: CurriculumModule[];
  facultyIds: string[];
  featured: boolean;
}

export const programs: Program[] = [
  {
    slug: "offensive-security-program",
    category: "Flagship",
    name: "Offensive Security Program",
    shortName: "OSP",
    tagline: "Run your first live red-team engagement in week 6.",
    outcomeStat: "91%",
    outcomeLabel: "of OSP graduates placed within 180 days",
    level: "Intermediate",
    focus: "Offensive",
    format: ["Cohort"],
    durationWeeks: 24,
    hoursPerWeek: "18-22 hrs/week",
    nextCohort: "September 14, 2026",
    seatsRemaining: 12,
    totalSeats: 40,
    tuition: 285000,
    tuitionCurrency: "INR",
    emiFrom: 11875,
    skillTags: [
      "Network penetration testing",
      "Web application exploitation",
      "Active Directory attacks",
      "Red team tradecraft",
      "Report writing",
      "Cloud attack paths",
    ],
    certifications: ["CEH (EC-Council)", "CompTIA PenTest+", "PenCap OSP Practical"],
    description:
      "Our flagship cohort-based program. You'll move from networking and Linux fundamentals through a full offensive security curriculum, culminating in a supervised live-fire engagement against a simulated enterprise network inside the PenCap Cyber Range. Built for career-changers who want the fastest credible path into a red team, SOC, or vulnerability management role.",
    idealFor: [
      "You have 1-3 years in IT, networking, or software and want to move into security specifically.",
      "You can commit 18-22 hours a week for 24 weeks alongside work or study.",
      "You want a cohort with deadlines and a mentor, not a self-paced video library.",
    ],
    notIdealFor: [
      "You have zero technical background and haven't taken our Security+ Foundations track yet — start there first.",
      "You want purely defensive or GRC work — see the Certified Network Defender or GRC & Compliance programs instead.",
      "You need a fully self-paced schedule with no live sessions — this program is cohort-only by design.",
    ],
    disqualifierNote:
      "Not ideal if you want purely defensive/GRC work with no offensive component — see the Certified Network Defender or GRC & Security Compliance programs.",
    curriculum: [
      {
        weekRange: "Weeks 1-3",
        title: "Foundations: networking, Linux, and scripting",
        description:
          "TCP/IP internals, Linux administration, Bash and Python scripting for security tooling.",
        skills: ["Linux", "TCP/IP", "Python", "Bash"],
      },
      {
        weekRange: "Weeks 4-8",
        title: "Network & infrastructure penetration testing",
        description:
          "Enumeration, exploitation, privilege escalation, and pivoting across simulated corporate networks in the Cyber Range.",
        skills: ["Nmap", "Metasploit", "Privilege escalation", "Pivoting"],
      },
      {
        weekRange: "Weeks 9-13",
        title: "Web application exploitation",
        description:
          "OWASP Top 10 in depth, authentication and business-logic flaws, Burp Suite proficiency, manual exploitation over automated scanning.",
        skills: ["Burp Suite", "OWASP Top 10", "SQLi", "SSRF", "Auth bypass"],
      },
      {
        weekRange: "Weeks 14-17",
        title: "Active Directory & internal networks",
        description:
          "Kerberoasting, lateral movement, domain privilege escalation against a live simulated Active Directory forest.",
        skills: ["Active Directory", "BloodHound", "Kerberoasting", "Lateral movement"],
      },
      {
        weekRange: "Weeks 18-20",
        title: "Cloud attack paths",
        description:
          "Misconfiguration hunting and exploitation across AWS and Azure environments provisioned per cohort.",
        skills: ["AWS security", "Azure security", "IAM misconfigurations"],
      },
      {
        weekRange: "Weeks 21-24",
        title: "Capstone: supervised live-fire engagement",
        description:
          "A full black-box engagement against a simulated enterprise network, delivered as a client-ready penetration test report, reviewed by faculty and an external practitioner.",
        skills: ["Report writing", "Client communication", "Engagement scoping"],
      },
    ],
    facultyIds: ["arvind-krishnamurthy", "divya-shankar", "ritesh-oberoi"],
    featured: true,
  },
  {
    slug: "certified-ethical-hacker",
    category: "Certification",
    name: "Certified Ethical Hacker (CEH v13)",
    shortName: "CEH",
    tagline: "The industry's most recognized offensive security credential, taught by people who use it daily.",
    outcomeStat: "94%",
    outcomeLabel: "first-attempt CEH exam pass rate",
    level: "Intermediate",
    focus: "Offensive",
    format: ["Cohort", "Self-paced"],
    durationWeeks: 10,
    hoursPerWeek: "10-14 hrs/week",
    nextCohort: "August 3, 2026",
    seatsRemaining: 21,
    totalSeats: 60,
    tuition: 95000,
    tuitionCurrency: "INR",
    emiFrom: 7917,
    skillTags: [
      "Footprinting & reconnaissance",
      "System hacking",
      "Malware analysis basics",
      "Wireless security",
      "IDS/firewall evasion",
    ],
    certifications: ["CEH (EC-Council)"],
    description:
      "An official EC-Council-aligned CEH v13 exam preparation program delivered at our accredited training center, combining the full 20-module EC-Council curriculum with hands-on lab hours in the PenCap Cyber Range so the certification reflects real practiced skill, not memorized terminology.",
    idealFor: [
      "You want the most widely recognized offensive security certification for your resume.",
      "You have basic networking knowledge and want a structured 10-week path to exam-ready.",
      "You're evaluating a security career and want a credential before committing to a longer program.",
    ],
    notIdealFor: [
      "You already hold OSCP or equivalent practical certification — this will feel introductory.",
      "You want a fully practical, non-exam-focused curriculum — see the Offensive Security Program.",
    ],
    disqualifierNote:
      "Not ideal if you already hold a practical offensive certification (OSCP or equivalent) — this program is calibrated below that level.",
    curriculum: [
      {
        weekRange: "Weeks 1-2",
        title: "Reconnaissance & scanning",
        description: "Footprinting methodology, network scanning, enumeration techniques.",
        skills: ["OSINT", "Nmap", "Enumeration"],
      },
      {
        weekRange: "Weeks 3-4",
        title: "System & network hacking",
        description: "Vulnerability analysis, system hacking phases, malware fundamentals.",
        skills: ["Vulnerability analysis", "Malware basics"],
      },
      {
        weekRange: "Weeks 5-6",
        title: "Web & wireless",
        description: "Web server and application attacks, SQL injection, wireless network security.",
        skills: ["Web app attacks", "SQLi", "Wireless security"],
      },
      {
        weekRange: "Weeks 7-8",
        title: "Cloud & IoT",
        description: "Cloud computing threats, IoT and OT hacking fundamentals.",
        skills: ["Cloud security", "IoT security"],
      },
      {
        weekRange: "Weeks 9-10",
        title: "Exam preparation & mock labs",
        description: "Timed mock exams, weak-area drilling, and the official CEH practical lab review.",
        skills: ["Exam strategy", "Practical labs"],
      },
    ],
    facultyIds: ["divya-shankar", "kavya-ramaswamy"],
    featured: true,
  },
  {
    slug: "security-plus-foundations",
    category: "Foundations",
    name: "CompTIA Security+ Foundations",
    shortName: "Security+",
    tagline: "The honest starting point if you have no security background at all.",
    outcomeStat: "96%",
    outcomeLabel: "first-attempt Security+ exam pass rate",
    level: "Beginner-friendly",
    focus: "Defensive",
    format: ["Cohort", "Self-paced"],
    durationWeeks: 8,
    hoursPerWeek: "8-10 hrs/week",
    nextCohort: "July 20, 2026",
    seatsRemaining: 34,
    totalSeats: 80,
    tuition: 42000,
    tuitionCurrency: "INR",
    emiFrom: 3500,
    skillTags: [
      "Security fundamentals",
      "Risk management",
      "Cryptography basics",
      "Network security",
      "Identity & access management",
    ],
    certifications: ["CompTIA Security+"],
    description:
      "A CompTIA Authorized Training Partner course covering the SY0-701 exam objectives in full, built for people with little or no prior IT background. This is the honest on-ramp we point beginners toward before the Offensive Security Program or CEH — most applicants without a technical background start here.",
    idealFor: [
      "You have little to no IT or security background and want a genuine on-ramp, not a shortcut.",
      "You want the most widely required baseline certification for security job postings.",
      "You're not sure yet whether you want offensive, defensive, or GRC work.",
    ],
    notIdealFor: [
      "You already have 2+ years in IT/networking — you'll likely find this too introductory; consider CEH or OSP directly.",
    ],
    disqualifierNote:
      "Not ideal if you already have solid networking or sysadmin experience — you'll likely be ready for CEH or the Offensive Security Program directly; talk to admissions before enrolling here.",
    curriculum: [
      {
        weekRange: "Weeks 1-2",
        title: "Security fundamentals & threat landscape",
        description: "CIA triad, threat actors, attack vectors, social engineering.",
        skills: ["Security fundamentals", "Threat modeling"],
      },
      {
        weekRange: "Weeks 3-4",
        title: "Architecture & network security",
        description: "Network segmentation, secure protocols, firewalls, and zero trust concepts.",
        skills: ["Network security", "Zero trust"],
      },
      {
        weekRange: "Weeks 5-6",
        title: "Identity, cryptography & risk",
        description: "IAM, PKI and cryptography fundamentals, risk management frameworks.",
        skills: ["IAM", "Cryptography", "Risk management"],
      },
      {
        weekRange: "Weeks 7-8",
        title: "Operations & exam preparation",
        description: "Incident response basics, governance, and full-length mock exams.",
        skills: ["Incident response", "Governance"],
      },
    ],
    facultyIds: ["kavya-ramaswamy", "naveen-pillai"],
    featured: true,
  },
  {
    slug: "cloud-devsecops-program",
    category: "Specialization",
    name: "Cloud & DevSecOps Security Program",
    shortName: "Cloud Security",
    tagline: "Secure the pipelines and platforms modern companies actually run on.",
    outcomeStat: "84%",
    outcomeLabel: "of graduates placed within 180 days",
    level: "Intermediate",
    focus: "Cloud",
    format: ["Cohort"],
    durationWeeks: 16,
    hoursPerWeek: "14-16 hrs/week",
    nextCohort: "October 5, 2026",
    seatsRemaining: 18,
    totalSeats: 35,
    tuition: 165000,
    tuitionCurrency: "INR",
    emiFrom: 6875,
    skillTags: [
      "AWS security",
      "Azure security",
      "Kubernetes security",
      "IaC scanning",
      "CI/CD pipeline hardening",
      "Container security",
    ],
    certifications: ["CompTIA Cloud+", "PenCap Cloud Security Practical"],
    description:
      "For engineers who already work with cloud infrastructure and want to specialize in securing it — covering cloud-native attack paths, container and Kubernetes security, and embedding security checks directly into CI/CD pipelines.",
    idealFor: [
      "You already work with AWS, Azure, or Kubernetes in a DevOps or engineering role.",
      "You want to specialize rather than start a broad security career from zero.",
    ],
    notIdealFor: [
      "You have no cloud or DevOps experience yet — start with Security+ Foundations or the Offensive Security Program.",
    ],
    disqualifierNote:
      "Not ideal without prior cloud or DevOps exposure — this program assumes you can already operate in AWS, Azure, or Kubernetes day to day.",
    curriculum: [
      {
        weekRange: "Weeks 1-4",
        title: "Cloud security foundations",
        description: "IAM misconfigurations, shared responsibility model, cloud logging and monitoring.",
        skills: ["AWS IAM", "Azure AD", "Cloud logging"],
      },
      {
        weekRange: "Weeks 5-9",
        title: "Container & Kubernetes security",
        description: "Container escape techniques, Kubernetes RBAC, admission controllers, runtime defense.",
        skills: ["Docker", "Kubernetes", "RBAC"],
      },
      {
        weekRange: "Weeks 10-13",
        title: "DevSecOps & pipeline hardening",
        description: "SAST/DAST integration, IaC scanning (Terraform), secrets management in CI/CD.",
        skills: ["CI/CD", "IaC scanning", "Secrets management"],
      },
      {
        weekRange: "Weeks 14-16",
        title: "Capstone: secure a live pipeline",
        description: "Harden and document a full CI/CD pipeline against a scored attack simulation.",
        skills: ["Pipeline hardening", "Documentation"],
      },
    ],
    facultyIds: ["ritesh-oberoi", "naveen-pillai"],
    featured: false,
  },
  {
    slug: "grc-security-compliance",
    category: "Specialization",
    name: "GRC & Security Compliance Program",
    shortName: "GRC & Compliance",
    tagline: "For people who want to run security programs, not just break in.",
    outcomeStat: "80%",
    outcomeLabel: "of graduates placed within 180 days",
    level: "Beginner-friendly",
    focus: "GRC",
    format: ["Cohort", "Self-paced"],
    durationWeeks: 12,
    hoursPerWeek: "10-12 hrs/week",
    nextCohort: "August 17, 2026",
    seatsRemaining: 26,
    totalSeats: 45,
    tuition: 78000,
    tuitionCurrency: "INR",
    emiFrom: 6500,
    skillTags: [
      "ISO 27001",
      "NIST CSF",
      "Risk assessment",
      "Audit management",
      "Security policy writing",
      "Vendor risk",
    ],
    certifications: ["CompTIA Security+", "PenCap GRC Practitioner"],
    description:
      "A program for people drawn to the governance, risk, and compliance side of security — building the skills to run ISO 27001 and SOC 2 programs, lead risk assessments, and translate technical findings into business risk language for leadership.",
    idealFor: [
      "You're interested in security but prefer policy, process, and risk work over hands-on exploitation.",
      "You work in audit, compliance, or IT governance already and want a security-specific credential.",
    ],
    notIdealFor: [
      "You want hands-on technical security work — see the Offensive Security Program or Certified Network Defender instead.",
    ],
    disqualifierNote:
      "Not ideal if your goal is hands-on penetration testing or incident response — this program is deliberately non-technical in focus.",
    curriculum: [
      {
        weekRange: "Weeks 1-3",
        title: "Governance & risk frameworks",
        description: "NIST CSF, ISO 27001 structure, risk assessment methodologies.",
        skills: ["NIST CSF", "ISO 27001", "Risk assessment"],
      },
      {
        weekRange: "Weeks 4-6",
        title: "Policy & control design",
        description: "Writing enforceable security policy, control mapping, control testing.",
        skills: ["Policy writing", "Control mapping"],
      },
      {
        weekRange: "Weeks 7-9",
        title: "Audit & vendor risk",
        description: "Internal audit preparation, third-party/vendor risk assessment programs.",
        skills: ["Audit management", "Vendor risk"],
      },
      {
        weekRange: "Weeks 10-12",
        title: "Capstone: build a compliance program",
        description: "Design a complete ISO 27001-aligned program for a simulated mid-size company.",
        skills: ["Program design", "Executive reporting"],
      },
    ],
    facultyIds: ["kavya-ramaswamy"],
    featured: false,
  },
  {
    slug: "certified-network-defender",
    category: "Certification",
    name: "Certified Network Defender (C|ND)",
    shortName: "C|ND",
    tagline: "Build and defend the network, don't just report on it.",
    outcomeStat: "82%",
    outcomeLabel: "of graduates placed within 180 days",
    level: "Intermediate",
    focus: "Defensive",
    format: ["Cohort", "Self-paced"],
    durationWeeks: 10,
    hoursPerWeek: "10-12 hrs/week",
    nextCohort: "September 1, 2026",
    seatsRemaining: 22,
    totalSeats: 40,
    tuition: 88000,
    tuitionCurrency: "INR",
    emiFrom: 7334,
    skillTags: [
      "Network defense",
      "SIEM & log analysis",
      "Incident response",
      "Threat intelligence",
      "Firewall & IDS/IPS",
    ],
    certifications: ["C|ND (EC-Council)"],
    description:
      "An official EC-Council C|ND-aligned program for people building toward SOC analyst, network security engineer, or blue team roles — heavy on log analysis, detection engineering, and incident response drills inside the Cyber Range's defensive track.",
    idealFor: [
      "You want blue team, SOC analyst, or network defense work specifically, not offensive testing.",
      "You have basic networking knowledge already.",
    ],
    notIdealFor: [
      "You want offensive/red-team work — see the Offensive Security Program or CEH instead.",
    ],
    disqualifierNote:
      "Not ideal if your goal is offensive security or penetration testing work — this is a defensive-track certification.",
    curriculum: [
      {
        weekRange: "Weeks 1-2",
        title: "Network security fundamentals",
        description: "Defense-in-depth, network segmentation, secure design principles.",
        skills: ["Network defense", "Segmentation"],
      },
      {
        weekRange: "Weeks 3-5",
        title: "Monitoring & detection",
        description: "SIEM fundamentals, log analysis, detection engineering basics.",
        skills: ["SIEM", "Log analysis"],
      },
      {
        weekRange: "Weeks 6-8",
        title: "Incident response & threat intel",
        description: "IR lifecycle, threat intelligence sourcing, playbook design.",
        skills: ["Incident response", "Threat intelligence"],
      },
      {
        weekRange: "Weeks 9-10",
        title: "Capstone: defend a live network",
        description: "Real-time detection and response drill against a red-team-driven attack simulation.",
        skills: ["Live response", "Playbook execution"],
      },
    ],
    facultyIds: ["arvind-krishnamurthy", "naveen-pillai"],
    featured: false,
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export function getFeaturedPrograms() {
  return programs.filter((p) => p.featured);
}

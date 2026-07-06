import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "offensive-security-program",
    name: "Offensive Security Program",
    shortName: "Offensive Security",
    category: "offensive",
    tagline: "Learn to think, and attack, like the adversaries your future employer is defending against.",
    level: "beginner",
    format: "cohort",
    durationWeeks: 20,
    nextCohort: "September 14, 2026",
    seatsRemaining: 12,
    totalSeats: 40,
    priceUsd: 14900,
    outcomeStat: "89%",
    outcomeStatLabel: "of graduates placed within 180 days",
    skills: [
      "Web application exploitation",
      "Network penetration testing",
      "Active Directory attacks",
      "Report writing & client communication",
      "Python for offensive tooling",
      "Social engineering assessment",
    ],
    description:
      "The Offensive Security Program is PenCap's flagship cohort — a 20-week path from first principles to a paid, junior penetration-testing role. You'll spend the first eight weeks building the technical foundation (networking, Linux, scripting, web fundamentals), the next eight running graduated offensive labs in the Cyber Range, and the final four weeks on a capstone engagement modeled on a real client assessment, reviewed by a mentor the way a senior tester would review a junior's first report.",
    idealFor: [
      "Career changers with some technical curiosity but no formal security background",
      "IT or helpdesk professionals ready to specialize",
      "Self-taught hobbyists who want structured mentorship and a credential employers recognize",
    ],
    notIdealFor: [
      {
        text: "You want to focus on defensive/blue-team work rather than offensive testing",
        alternativeSlug: "soc-analyst-accelerator",
      },
      {
        text: "You already hold an OSCP or have 2+ years of professional pentesting experience",
        alternativeSlug: "advanced-red-team-certificate",
      },
    ],
    prerequisites: [
      "Comfortable navigating a command line (we teach the rest)",
      "Ability to commit 15–20 hours per week for 20 weeks",
      "A laptop capable of running a local virtual machine (8GB+ RAM)",
    ],
    curriculum: [
      {
        weekRange: "Weeks 1–4",
        title: "Foundations",
        description: "Networking fundamentals, Linux administration, and scripting in Python and Bash, taught through offensive-relevant exercises rather than abstract theory.",
        skills: ["Networking", "Linux", "Python scripting", "Bash"],
      },
      {
        weekRange: "Weeks 5–8",
        title: "Web application security",
        description: "Injection flaws, authentication and session vulnerabilities, and business-logic exploitation across a set of deliberately realistic multi-page lab applications.",
        skills: ["OWASP Top 10", "Burp Suite", "Authentication attacks", "Business logic flaws"],
      },
      {
        weekRange: "Weeks 9–13",
        title: "Network & Active Directory",
        description: "Enumeration, exploitation, and lateral movement through a simulated corporate network and Windows domain, including credential attacks and privilege escalation.",
        skills: ["Nmap & enumeration", "Active Directory attacks", "Privilege escalation", "Lateral movement"],
      },
      {
        weekRange: "Weeks 14–16",
        title: "Social engineering & physical assessment",
        description: "Designing and scoring a pretext-based phishing simulation, and the ethical and legal boundaries governing real-world social-engineering assessments.",
        skills: ["Phishing simulation design", "Pretexting", "Engagement scoping"],
      },
      {
        weekRange: "Weeks 17–20",
        title: "Capstone engagement",
        description: "A full, timed assessment against a purpose-built target environment, ending in a formal written report reviewed by a mentor as a hiring manager would review it.",
        skills: ["Report writing", "Client communication", "Engagement methodology"],
      },
    ],
    facultySlugs: ["mara-ibsen", "lena-cho"],
    testimonialIds: ["jordan-ellis", "katie-nguyen", "whitney-park"],
  },
  {
    slug: "soc-analyst-accelerator",
    name: "SOC Analyst Accelerator",
    shortName: "SOC Analyst",
    category: "defensive",
    tagline: "Go from zero security experience to a functioning Tier 1/2 SOC analyst in 12 weeks.",
    level: "beginner",
    format: "cohort",
    durationWeeks: 12,
    nextCohort: "August 24, 2026",
    seatsRemaining: 18,
    totalSeats: 40,
    priceUsd: 8900,
    outcomeStat: "91%",
    outcomeStatLabel: "of graduates placed within 180 days",
    skills: [
      "SIEM alert triage",
      "Network forensics",
      "Incident reporting",
      "Log analysis at scale",
      "Threat intelligence basics",
      "Detection engineering fundamentals",
    ],
    description:
      "The SOC Analyst Accelerator is our shortest, most direct path into a first security role. Over 12 weeks you'll learn to triage alerts under realistic volume and noise, investigate incidents using real network and endpoint telemetry, and write reports that hold up under a CISO's questions — all inside a simulated SOC environment run by an instructor who managed one for five years.",
    idealFor: [
      "Career changers who want the fastest credentialed path into a first security role",
      "IT support or help desk staff looking to move into security operations",
      "People who prefer investigation and pattern-recognition work over offensive testing",
    ],
    notIdealFor: [
      {
        text: "You're specifically aiming for a penetration-testing or red-team career track",
        alternativeSlug: "offensive-security-program",
      },
      {
        text: "You already have 1+ years of SOC experience and want advanced threat-hunting depth",
        alternativeSlug: "advanced-red-team-certificate",
      },
    ],
    prerequisites: [
      "Basic familiarity with using a computer professionally (no coding required)",
      "Ability to commit 12–15 hours per week for 12 weeks",
    ],
    curriculum: [
      {
        weekRange: "Weeks 1–3",
        title: "SOC fundamentals",
        description: "How a real SOC is structured, alert lifecycle, and the tools (SIEM, EDR, ticketing) analysts use daily.",
        skills: ["SIEM basics", "Alert triage", "SOC workflows"],
      },
      {
        weekRange: "Weeks 4–7",
        title: "Network & endpoint forensics",
        description: "Reading packet captures, endpoint logs, and correlating signals across sources to reconstruct what actually happened during an incident.",
        skills: ["Network forensics", "Endpoint telemetry", "Log correlation"],
      },
      {
        weekRange: "Weeks 8–10",
        title: "Threat intelligence & detection engineering",
        description: "Using threat intel feeds to prioritize, and writing basic detection rules to reduce future alert noise.",
        skills: ["Threat intelligence", "Detection rule writing"],
      },
      {
        weekRange: "Weeks 11–12",
        title: "Capstone incident",
        description: "A full simulated incident, from first alert to final written report, run at realistic pace and reviewed by a mentor.",
        skills: ["Incident reporting", "Escalation judgment"],
      },
    ],
    facultySlugs: ["priya-raman", "marcus-webb"],
    testimonialIds: ["aisha-bello"],
  },
  {
    slug: "cloud-security-devsecops",
    name: "Cloud Security & DevSecOps Certificate",
    shortName: "Cloud Security",
    category: "cloud",
    tagline: "Learn to find and close the misconfigurations attackers look for first in modern cloud infrastructure.",
    level: "intermediate",
    format: "cohort",
    durationWeeks: 14,
    nextCohort: "October 5, 2026",
    seatsRemaining: 9,
    totalSeats: 30,
    priceUsd: 11500,
    outcomeStat: "86%",
    outcomeStatLabel: "of graduates placed within 180 days",
    skills: [
      "IAM misconfiguration analysis",
      "Container & Kubernetes security",
      "Infrastructure-as-code scanning",
      "CI/CD pipeline hardening",
      "AWS, Azure & GCP security tooling",
      "Cloud incident response",
    ],
    description:
      "Built for engineers who already know cloud infrastructure but want the attacker's-eye view of it. Over 14 weeks, you'll learn to identify identity, storage, and network misconfigurations across AWS, Azure, and GCP, harden CI/CD pipelines against supply-chain risks, and build the scanning and policy-as-code habits that prevent the same issues from recurring.",
    idealFor: [
      "Cloud, platform, or DevOps engineers moving into a security specialization",
      "Systems administrators with cloud experience ready to focus on security",
      "Engineers preparing for a cloud-security certification who want hands-on depth first",
    ],
    notIdealFor: [
      {
        text: "You have no prior cloud infrastructure experience",
        alternativeSlug: "soc-analyst-accelerator",
      },
      {
        text: "You want a general introduction to security rather than a cloud-specific specialization",
        alternativeSlug: "offensive-security-program",
      },
    ],
    prerequisites: [
      "At least 1 year of hands-on experience with a major cloud provider",
      "Comfortable with basic scripting (Python or Bash)",
      "Ability to commit 12–15 hours per week for 14 weeks",
    ],
    curriculum: [
      {
        weekRange: "Weeks 1–3",
        title: "Cloud identity & access",
        description: "IAM misconfiguration patterns across AWS, Azure, and GCP, and how attackers chain small permission gaps into full account compromise.",
        skills: ["IAM analysis", "Privilege escalation paths", "Cross-cloud identity models"],
      },
      {
        weekRange: "Weeks 4–7",
        title: "Container & orchestration security",
        description: "Kubernetes and container-runtime hardening, image scanning, and securing service-to-service communication.",
        skills: ["Kubernetes security", "Container scanning", "Service mesh security"],
      },
      {
        weekRange: "Weeks 8–10",
        title: "Infrastructure as code & CI/CD",
        description: "Policy-as-code scanning of Terraform and CloudFormation, and securing build pipelines against supply-chain injection.",
        skills: ["IaC scanning", "Pipeline hardening", "Supply-chain risk"],
      },
      {
        weekRange: "Weeks 11–14",
        title: "Capstone: cloud incident response",
        description: "A simulated multi-service cloud compromise, requiring identification, containment, and a written remediation plan.",
        skills: ["Cloud incident response", "Remediation planning"],
      },
    ],
    facultySlugs: ["devon-okafor", "lena-cho"],
    testimonialIds: ["sam-reyes"],
  },
  {
    slug: "advanced-red-team-certificate",
    name: "Advanced Red Team Certificate",
    shortName: "Advanced Red Team",
    category: "advanced",
    tagline: "For practicing security professionals ready to specialize in evasion, post-exploitation, and full-scope engagements.",
    level: "advanced",
    format: "cohort",
    durationWeeks: 10,
    nextCohort: "September 28, 2026",
    seatsRemaining: 7,
    totalSeats: 24,
    priceUsd: 17500,
    outcomeStat: "94%",
    outcomeStatLabel: "of graduates report a promotion or role change within 6 months",
    skills: [
      "EDR & detection evasion",
      "Advanced Active Directory attacks",
      "Command-and-control operations",
      "Full-scope engagement planning",
      "Purple-team collaboration",
      "Advanced report writing for executive audiences",
    ],
    description:
      "The Advanced Red Team Certificate assumes you can already run a standard penetration test — this program is about the last 20% that separates a junior tester from a senior operator: evading modern EDR, chaining advanced Active Directory attacks, running realistic command-and-control infrastructure, and planning full-scope engagements end to end.",
    idealFor: [
      "Practicing penetration testers with 1+ years of professional experience",
      "OSCP holders (or equivalent) ready to specialize further",
      "Security engineers moving into a dedicated red-team role",
    ],
    notIdealFor: [
      {
        text: "You're new to security or have never run a penetration test",
        alternativeSlug: "offensive-security-program",
      },
      {
        text: "Your interest is primarily defensive/blue-team work",
        alternativeSlug: "soc-analyst-accelerator",
      },
    ],
    prerequisites: [
      "1+ years of professional penetration-testing experience, or OSCP/equivalent certification",
      "Demonstrated Active Directory attack experience (verified during the assessment step)",
      "Ability to commit 15–18 hours per week for 10 weeks",
    ],
    curriculum: [
      {
        weekRange: "Weeks 1–3",
        title: "Modern EDR & detection evasion",
        description: "Understanding how modern endpoint detection products instrument a host, and the techniques used to operate without immediate detection.",
        skills: ["EDR internals", "Evasion techniques", "Living-off-the-land tooling"],
      },
      {
        weekRange: "Weeks 4–6",
        title: "Advanced Active Directory & lateral movement",
        description: "Kerberoasting, delegation abuse, and multi-hop lateral movement chains across a full enterprise domain.",
        skills: ["Kerberoasting", "Delegation abuse", "Advanced lateral movement"],
      },
      {
        weekRange: "Weeks 7–8",
        title: "Command-and-control & full-scope planning",
        description: "Standing up and operating realistic C2 infrastructure, and planning a full-scope engagement across web, network, and physical vectors.",
        skills: ["C2 operations", "Engagement scoping", "Purple-team collaboration"],
      },
      {
        weekRange: "Weeks 9–10",
        title: "Capstone: full-scope engagement",
        description: "A complete, timed, full-scope engagement against a purpose-built enterprise environment, with an executive-level debrief as the final deliverable.",
        skills: ["Executive reporting", "Full-scope methodology"],
      },
    ],
    facultySlugs: ["tomas-vukovic", "mara-ibsen", "marcus-webb"],
    testimonialIds: ["diego-fuentes"],
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export function getAllProgramSlugs() {
  return programs.map((p) => p.slug);
}

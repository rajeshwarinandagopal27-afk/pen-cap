import type { CyberRangeCategory } from "@/lib/types";

export const cyberRangeCategories: CyberRangeCategory[] = [
  {
    slug: "web-exploitation",
    name: "Web Exploitation",
    description:
      "Authentication bypasses, injection flaws, and business-logic vulnerabilities in realistic multi-page applications, not single isolated endpoints.",
    challengeCount: 34,
    difficulty: "low",
  },
  {
    slug: "network-penetration",
    name: "Network Penetration",
    description:
      "Enumerate, pivot, and escalate through simulated corporate networks with segmented VLANs, active directory, and monitored egress.",
    challengeCount: 28,
    difficulty: "medium",
  },
  {
    slug: "cloud-misconfiguration",
    name: "Cloud Misconfiguration",
    description:
      "Find the identity, storage, and network misconfigurations attackers look for first across AWS, Azure, and GCP sandbox environments.",
    challengeCount: 22,
    difficulty: "medium",
  },
  {
    slug: "active-directory",
    name: "Active Directory & Post-Exploitation",
    description:
      "Kerberoasting, lateral movement, and privilege escalation chains in a full enterprise domain built for the Advanced Red Team Certificate.",
    challengeCount: 19,
    difficulty: "high",
  },
  {
    slug: "social-engineering",
    name: "Social Engineering Simulation",
    description:
      "Scripted phishing-pretext and vishing simulations with scored transcripts, used to teach both the offense and the defensive triage side.",
    challengeCount: 12,
    difficulty: "medium",
  },
  {
    slug: "evasion",
    name: "EDR & Detection Evasion",
    description:
      "Advanced payload delivery and evasion techniques against instrumented, monitored endpoints — capstone-level, gated behind program enrollment.",
    challengeCount: 15,
    difficulty: "critical",
  },
];

export const freeChallenge = {
  title: "Broken Access Control: Invoice Portal",
  category: "Web Exploitation",
  difficulty: "low" as const,
  description:
    "A simulated vendor invoice portal exposes another tenant's records through a predictable identifier. Find the flaw and retrieve the hidden invoice — no signup required to start.",
};

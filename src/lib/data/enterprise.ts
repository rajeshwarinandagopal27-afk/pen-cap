import type { EmployerCaseStudy } from "@/lib/types";

export const enterpriseCaseStudies: EmployerCaseStudy[] = [
  {
    company: "Solace Financial",
    industry: "Retail banking",
    headline: "Cut critical audit findings by 47% in two quarters",
    result:
      "Solace Financial enrolled 18 application engineers in a custom cohort of the Offensive Security Program's first ten weeks, focused on secure code review. Critical findings in their next external audit dropped by 47% compared to the prior cycle.",
    quote:
      "We didn't need our engineers to become penetration testers. We needed them to stop introducing the vulnerabilities our red team kept finding. That's exactly what the custom cohort targeted.",
    attributedTo: "VP of Application Security, Solace Financial",
  },
  {
    company: "Northgate Health Systems",
    industry: "Healthcare",
    headline: "Reduced mean time to detection from 11 hours to 90 minutes",
    result:
      "Northgate sponsored 9 existing IT staff through the SOC Analyst Accelerator to build a formal security operations function from scratch. Within one quarter of graduating, the new team cut mean time to detection on simulated incidents from 11 hours to under 90 minutes.",
    quote:
      "We didn't have a SOC. We had IT staff who got paged when something looked wrong. Now we have an actual team with a process, and it happened faster than hiring externally would have.",
    attributedTo: "CISO, Northgate Health Systems",
  },
  {
    company: "Vantage Cloud Partners",
    industry: "Cloud infrastructure",
    headline: "Closed a compliance gap ahead of a SOC 2 Type II audit",
    result:
      "Vantage Cloud Partners sponsored 6 platform engineers through the Cloud Security & DevSecOps Certificate to address findings from a pre-audit gap assessment. All flagged findings were remediated before the formal SOC 2 Type II audit began.",
    quote:
      "Our engineers already knew the infrastructure. What they didn't have was a shared vocabulary and method for reasoning about attacker paths through it. That's what changed.",
    attributedTo: "Head of Platform Engineering, Vantage Cloud Partners",
  },
];

export const enterpriseOfferings = [
  {
    title: "Custom cohorts",
    description:
      "A private cohort built around your team's existing tooling and threat model, taught by the same faculty who teach our public programs.",
  },
  {
    title: "On-site or remote delivery",
    description:
      "Sessions run at your offices or fully remote, scheduled around your team's on-call rotations rather than a fixed public calendar.",
  },
  {
    title: "Compliance-mapped curriculum",
    description:
      "Modules can be mapped to specific NIST SP 800-53 or ISO 27001 training requirements for audit documentation, on request.",
  },
  {
    title: "Sponsorship for individual enrollment",
    description:
      "Sponsor individual employees into existing public cohorts, with consolidated invoicing and a shared progress dashboard for your L&D team.",
  },
];

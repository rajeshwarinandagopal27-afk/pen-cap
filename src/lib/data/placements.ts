import type { JobRole, PlacementPartner } from "@/lib/types";

export const placementPartners: PlacementPartner[] = [
  { name: "TCS" },
  { name: "Wipro" },
  { name: "HCLTech" },
  { name: "Cognizant" },
  { name: "Zoho" },
  { name: "Deloitte" },
  { name: "Infosys" },
  { name: "Accenture" },
  { name: "Tech Mahindra" },
  { name: "Freshworks" },
  { name: "KPMG" },
  { name: "EY" },
];

export const jobRoles: JobRole[] = [
  {
    title: "SOC Analyst (Tier 1/2)",
    salaryRange: "₹4.5 – 9 LPA",
    description: "Monitor enterprise networks, triage alerts and escalate confirmed incidents in a live SOC environment.",
  },
  {
    title: "Penetration Tester",
    salaryRange: "₹5 – 11 LPA",
    description: "Simulate real-world attacks against networks, applications and infrastructure to uncover exploitable vulnerabilities.",
  },
  {
    title: "Vulnerability Analyst",
    salaryRange: "₹4.5 – 8 LPA",
    description: "Run vulnerability assessments, prioritize risk, and coordinate remediation with engineering teams.",
  },
  {
    title: "Threat Intelligence Analyst",
    salaryRange: "₹5.5 – 10 LPA",
    description: "Track adversary tactics and emerging threats, translating intelligence into detection rules and playbooks.",
  },
  {
    title: "Security Engineer",
    salaryRange: "₹6 – 14 LPA",
    description: "Design and implement security controls across cloud and on-premise infrastructure for enterprise environments.",
  },
  {
    title: "GRC Analyst",
    salaryRange: "₹5 – 9 LPA",
    description: "Drive governance, risk and compliance programs, audits and framework implementations (ISO 27001, SOC 2).",
  },
];

export const careerRoadmap = [
  {
    step: "01",
    title: "Foundation & Onboarding",
    description: "Assessment of your background, personalized learning path, and access to campus labs from week one.",
  },
  {
    step: "02",
    title: "Core Technical Training",
    description: "Hands-on modules with mentors, weekly assessments, and real-world lab simulations.",
  },
  {
    step: "03",
    title: "Certification",
    description: "Sit for EC-Council / CompTIA-aligned certification exams with dedicated exam-readiness coaching.",
  },
  {
    step: "04",
    title: "Internship / Capstone Project",
    description: "Apply your skills on a live capstone engagement or partner internship under mentor supervision.",
  },
  {
    step: "05",
    title: "Placement Sprint",
    description: "Resume building, mock interviews, and introductions across our 40+ hiring partner network.",
  },
  {
    step: "06",
    title: "Offer & Onboarding Support",
    description: "Negotiation guidance and continued mentor support through your first 90 days on the job.",
  },
];

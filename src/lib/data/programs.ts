import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "ceh-v13-ai",
    name: "Certified Ethical Hacker v13 AI",
    shortName: "CEH v13 AI",
    tagline: "Master offensive security with the world's most recognized ethical hacking credential.",
    level: "Foundation",
    duration: "12 Weeks",
    format: "Weekday & Weekend Batches · Classroom + Live Labs",
    batchSize: "Limited to 15 students",
    whoFor: [
      "Fresh graduates in CS/IT wanting to enter cybersecurity",
      "Network engineers & system administrators upskilling",
      "IT professionals switching into security roles",
      "Developers who want to understand application security",
    ],
    outcome: "Become a job-ready Ethical Hacker / Penetration Tester within 12 weeks.",
    outcomes: [
      "Crack the EC-Council CEH v13 certification exam on the first attempt",
      "Build a portfolio of 10+ documented penetration tests",
      "Perform reconnaissance, scanning, exploitation & reporting end-to-end",
      "Get placement-ready with mock interviews and resume building",
    ],
    skills: [
      "Footprinting & Reconnaissance",
      "Network Scanning & Enumeration",
      "Vulnerability Analysis",
      "System & Web Application Hacking",
      "Wireless & Mobile Security",
      "Cloud & IoT Security",
      "Cryptography",
      "AI-Powered Threat Detection",
    ],
    tools: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Kali Linux", "Nessus", "John the Ripper", "OWASP ZAP"],
    modules: [
      {
        title: "Foundations of Ethical Hacking",
        topics: ["Information security overview", "Cyber kill chain & MITRE ATT&CK", "Footprinting & reconnaissance", "Scanning networks"],
      },
      {
        title: "Vulnerability Assessment",
        topics: ["Enumeration techniques", "Vulnerability analysis", "System hacking methodology", "Malware threats & analysis"],
      },
      {
        title: "Network & Perimeter Hacking",
        topics: ["Sniffing", "Social engineering", "Denial-of-Service", "Session hijacking", "Evading IDS, firewalls & honeypots"],
      },
      {
        title: "Application & Web Hacking",
        topics: ["Hacking web servers", "Hacking web applications", "SQL injection", "OWASP Top 10 exploitation"],
      },
      {
        title: "Wireless, Mobile & IoT",
        topics: ["Hacking wireless networks", "Hacking mobile platforms", "IoT & OT hacking", "Cloud computing security"],
      },
      {
        title: "Cryptography & AI Security",
        topics: ["Cryptography fundamentals", "AI-driven attack detection", "Capstone penetration test", "Report writing & CEH exam prep"],
      },
    ],
    certifications: ["EC-Council CEH v13 AI Certification (exam voucher included)"],
    averageSalaryRange: "₹4.5 LPA – ₹9 LPA",
    jobRoles: ["Penetration Tester", "Ethical Hacker", "Vulnerability Analyst", "Security Consultant"],
    featured: true,
    accentColor: "royal",
  },
  {
    slug: "soc-analyst",
    name: "SOC Analyst Professional Program",
    shortName: "SOC Analyst",
    tagline: "Defend enterprise networks in real time from a live Security Operations Center.",
    level: "Advanced",
    duration: "16 Weeks",
    format: "Weekday & Weekend Batches · Live SOC Lab",
    batchSize: "Limited to 15 students",
    whoFor: [
      "Network engineers & system administrators moving into SOC roles",
      "CEH graduates wanting a blue-team specialization",
      "IT support professionals targeting SOC Tier 1/2 roles",
      "Career changers with a technical foundation",
    ],
    outcome: "Step into a Tier 1/2 SOC Analyst role monitoring live enterprise traffic.",
    outcomes: [
      "Operate industry-standard SIEM platforms independently",
      "Detect, triage and escalate real security incidents",
      "Write detection rules and threat-hunting playbooks",
      "Handle a live incident from alert to resolution in mock drills",
    ],
    skills: [
      "SIEM Monitoring & Correlation",
      "Threat Intelligence",
      "Incident Response",
      "Log Analysis",
      "Threat Hunting",
      "Network Traffic Analysis",
      "Endpoint Detection & Response",
      "SOC Reporting & Escalation",
    ],
    tools: ["Splunk", "IBM QRadar", "Wireshark", "Microsoft Sentinel", "Elastic SIEM", "CrowdStrike", "MITRE ATT&CK Navigator", "TheHive"],
    modules: [
      {
        title: "SOC Fundamentals",
        topics: ["SOC architecture & workflows", "Security monitoring concepts", "Log management", "SIEM architecture"],
      },
      {
        title: "Threat Detection",
        topics: ["Correlation rules & use cases", "Network traffic analysis", "Endpoint detection & response", "Threat intelligence platforms"],
      },
      {
        title: "Incident Response",
        topics: ["Incident classification & triage", "Incident response lifecycle", "Digital forensics fundamentals", "Chain of custody & evidence handling"],
      },
      {
        title: "Threat Hunting & Live Ops",
        topics: ["Proactive threat hunting", "MITRE ATT&CK mapping", "Live SOC lab simulations", "SOC reporting, KPIs & shift handover"],
      },
    ],
    certifications: ["PenCap SOC Analyst Certificate", "Exam readiness for CompTIA Security+ / CySA+"],
    averageSalaryRange: "₹5 LPA – ₹11 LPA",
    jobRoles: ["SOC Analyst (Tier 1/2)", "Threat Intelligence Analyst", "Incident Responder", "Security Monitoring Specialist"],
    featured: true,
    accentColor: "navy",
  },
  {
    slug: "master-program",
    name: "Master Program in Cybersecurity",
    shortName: "Master Program",
    tagline: "The complete offensive + defensive career track from zero to enterprise-ready professional.",
    level: "Master",
    duration: "9 Months",
    format: "Weekday & Weekend Batches · Full Campus Access",
    batchSize: "Limited to 15 students",
    whoFor: [
      "Fresh graduates who want the fastest route to a security career",
      "Professionals wanting both offensive and defensive expertise",
      "Career changers with no prior security background",
      "Students who want an internship + guaranteed interviews",
    ],
    outcome: "Graduate as a well-rounded cybersecurity professional, ready for offensive or defensive roles.",
    outcomes: [
      "Earn CEH v13 AI and SOC Analyst certifications together",
      "Complete a 6-week paid internship with a partner company",
      "Build an end-to-end security portfolio across 25+ labs",
      "Receive guaranteed interview opportunities with hiring partners",
    ],
    skills: [
      "Ethical Hacking & Penetration Testing",
      "SOC Monitoring & Threat Hunting",
      "Cloud Security (AWS/Azure)",
      "GRC & Security Compliance",
      "Malware Analysis",
      "Digital Forensics",
      "DevSecOps Fundamentals",
      "Career & Interview Readiness",
    ],
    tools: ["Nmap", "Metasploit", "Burp Suite", "Splunk", "QRadar", "AWS Security Hub", "Wireshark", "Kali Linux"],
    modules: [
      {
        title: "Months 1–2: Security Foundations",
        topics: ["Networking & OS fundamentals", "Linux & scripting for security", "Information security principles", "Cyber law & compliance"],
      },
      {
        title: "Months 3–4: Offensive Security (CEH Track)",
        topics: ["Reconnaissance & scanning", "System & web hacking", "Wireless, mobile & IoT hacking", "CEH v13 AI certification"],
      },
      {
        title: "Months 5–6: Defensive Security (SOC Track)",
        topics: ["SIEM & log analysis", "Incident response", "Threat hunting", "SOC Analyst certification"],
      },
      {
        title: "Months 7–8: Cloud, GRC & Specialization",
        topics: ["Cloud security fundamentals", "Governance, risk & compliance", "Malware analysis & forensics", "Capstone security project"],
      },
      {
        title: "Month 9: Internship & Placement",
        topics: ["6-week paid internship", "Resume & LinkedIn optimization", "Mock interviews with mentors", "Guaranteed interview opportunities"],
      },
    ],
    certifications: [
      "EC-Council CEH v13 AI Certification",
      "PenCap SOC Analyst Certificate",
      "PenCap Master Program Diploma",
    ],
    averageSalaryRange: "₹6 LPA – ₹14 LPA",
    jobRoles: ["Cybersecurity Analyst", "Penetration Tester", "SOC Analyst", "Security Engineer", "GRC Analyst"],
    featured: true,
    accentColor: "red",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}

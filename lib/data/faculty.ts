export interface Faculty {
  id: string;
  name: string;
  title: string;
  credibilityLine: string;
  bio: string;
  credentials: string[];
  cveCount: number;
  formerEmployers: string[];
  programs: string[];
  initials: string;
}

export const faculty: Faculty[] = [
  {
    id: "arvind-krishnamurthy",
    name: "Arvind Krishnamurthy",
    title: "Lead Faculty, Offensive Security",
    credibilityLine: "Former lead, red team at a Big Four consultancy · c0c0n XVI speaker",
    bio: "Arvind spent seven years running red-team engagements for banking and telecom clients before joining PenCap full-time in 2021. He has reported vulnerabilities credited under 9 CVEs, and built the Cyber Range's Active Directory attack-path labs from scratch.",
    credentials: ["OSCP", "OSCE", "CEH Master"],
    cveCount: 9,
    formerEmployers: ["Deloitte India", "Wipro CyberSecurity"],
    programs: ["offensive-security-program", "certified-network-defender"],
    initials: "AK",
  },
  {
    id: "divya-shankar",
    name: "Divya Shankar",
    title: "Faculty, Application Security",
    credibilityLine: "Former AppSec lead, Zoho · 6 CVEs in widely used open-source libraries",
    bio: "Divya led application security review for Zoho's collaboration suite before joining PenCap. She teaches the web exploitation module of the Offensive Security Program and the CEH web-attacks unit, and still reviews bug bounty submissions for two Indian fintechs part-time.",
    credentials: ["OSWE", "CEH Master", "CREST CRT"],
    cveCount: 6,
    formerEmployers: ["Zoho Corporation", "Freshworks"],
    programs: ["offensive-security-program", "certified-ethical-hacker"],
    initials: "DS",
  },
  {
    id: "ritesh-oberoi",
    name: "Ritesh Oberoi",
    title: "Faculty, Cloud & DevSecOps",
    credibilityLine: "Former senior cloud security engineer, Cisco · AWS re:Inforce speaker, 2024",
    bio: "Ritesh built cloud security posture management tooling used across Cisco's internal platform teams. At PenCap he teaches the Cloud & DevSecOps Security Program and maintains the Cyber Range's AWS and Kubernetes attack-path environments.",
    credentials: ["AWS Security Specialty", "CKS", "OSCP"],
    cveCount: 3,
    formerEmployers: ["Cisco Systems", "Freshworks"],
    programs: ["offensive-security-program", "cloud-devsecops-program"],
    initials: "RO",
  },
  {
    id: "kavya-ramaswamy",
    name: "Kavya Ramaswamy",
    title: "Faculty, GRC & Certification Programs",
    credibilityLine: "Former ISO 27001 lead auditor, TCS · CompTIA Instructor Network member",
    bio: "Kavya spent nine years auditing security programs for manufacturing and BFSI clients before moving into full-time teaching. She leads Security+ Foundations, CEH exam preparation, and designed the GRC & Security Compliance capstone.",
    credentials: ["CISA", "ISO 27001 Lead Auditor", "CEH"],
    cveCount: 0,
    formerEmployers: ["Tata Consultancy Services", "KPMG India"],
    programs: ["security-plus-foundations", "certified-ethical-hacker", "grc-security-compliance"],
    initials: "KR",
  },
  {
    id: "naveen-pillai",
    name: "Naveen Pillai",
    title: "Faculty, Network Defense & SOC Operations",
    credibilityLine: "Former SOC manager, HCLTech MSSP practice · Nullcon Goa 2023 speaker",
    bio: "Naveen ran a 24x7 SOC covering manufacturing and logistics clients for HCLTech's managed security practice. He teaches Certified Network Defender and the defensive-track modules of the Cyber Range, and built PenCap's detection-engineering curriculum.",
    credentials: ["GCIA", "C|ND", "Splunk Certified Architect"],
    cveCount: 1,
    formerEmployers: ["HCLTech", "Happiest Minds"],
    programs: ["certified-network-defender", "security-plus-foundations", "cloud-devsecops-program"],
    initials: "NP",
  },
  {
    id: "meera-vaidyanathan",
    name: "Meera Vaidyanathan",
    title: "Director of Admissions & Career Services",
    credibilityLine: "Former technical recruiter, Cognizant Security Services · placed 400+ security hires",
    bio: "Meera spent six years recruiting offensive and defensive security talent for Cognizant's managed services division before joining PenCap to build our placement and interview-preparation function. She personally reviews every graduate's resume before it reaches a hiring partner.",
    credentials: ["SHRM-CP"],
    cveCount: 0,
    formerEmployers: ["Cognizant", "Randstad Technologies"],
    programs: [],
    initials: "MV",
  },
];

export function getFacultyById(id: string) {
  return faculty.find((f) => f.id === id);
}

export function getFacultyForProgram(slug: string) {
  return faculty.filter((f) => f.programs.includes(slug));
}

import type { FacultyMember } from "@/lib/types";

export const faculty: FacultyMember[] = [
  {
    id: "f1",
    name: "Vikram Aditya Rao",
    title: "Lead Faculty, Offensive Security",
    bio: "Vikram leads the CEH v13 AI track, drawing on 11 years of penetration testing engagements across banking and fintech clients across APAC.",
    credentials: ["CEH Master", "OSCP", "CISSP"],
    experienceYears: 11,
    initials: "VR",
  },
  {
    id: "f2",
    name: "Meera Krishnamurthy",
    title: "Lead Faculty, SOC & Blue Team",
    bio: "Meera built and led a 24x7 SOC for a global managed security services provider before joining PenCap to train the next generation of analysts.",
    credentials: ["CompTIA CySA+", "GCIH", "Splunk Certified Architect"],
    experienceYears: 9,
    initials: "MK",
  },
  {
    id: "f3",
    name: "Arjun Balachandran",
    title: "Faculty, Cloud & GRC",
    bio: "Arjun specializes in cloud security architecture and compliance frameworks, having led security audits for enterprises across India and the Middle East.",
    credentials: ["AWS Security Specialty", "CISA", "ISO 27001 Lead Auditor"],
    experienceYears: 8,
    initials: "AB",
  },
  {
    id: "f4",
    name: "Lakshmi Narayanan",
    title: "Career Services Director",
    bio: "Lakshmi runs PenCap's placement engine — resume workshops, mock interviews, and a 40+ hiring partner network built over six years.",
    credentials: ["Certified Career Coach", "SHRM-CP"],
    experienceYears: 6,
    initials: "LN",
  },
];

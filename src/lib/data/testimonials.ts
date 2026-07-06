import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "jordan-ellis",
    name: "Jordan Ellis",
    program: "Offensive Security Program",
    programSlug: "offensive-security-program",
    currentRole: "Penetration Tester",
    currentCompany: "Anchorpoint Bank",
    quote:
      "I'd been a network admin for six years and kept getting told I needed a CS degree to move into security. PenCap was the first program that just asked me to prove I could do the work. I had an offer four weeks after graduating.",
    outcomeChip: "Placed in 4 weeks",
    hasVideo: true,
    background: "Career changer, former network administrator",
    photoAlt: "Portrait of Jordan Ellis, Penetration Tester at Anchorpoint Bank",
  },
  {
    id: "aisha-bello",
    name: "Aisha Bello",
    program: "SOC Analyst Accelerator",
    programSlug: "soc-analyst-accelerator",
    currentRole: "SOC Analyst II",
    currentCompany: "Northgate Health Systems",
    quote:
      "The program is honest about what a SOC job actually looks like at 2 a.m. during an incident. That's exactly what I got asked about in my interview, and I'd already practiced it in the labs.",
    outcomeChip: "Placed in 9 weeks",
    background: "Career changer, former medical records technician",
    photoAlt: "Portrait of Aisha Bello, SOC Analyst II at Northgate Health Systems",
  },
  {
    id: "sam-reyes",
    name: "Sam Reyes",
    program: "Cloud Security & DevSecOps",
    programSlug: "cloud-security-devsecops",
    currentRole: "Cloud Security Engineer",
    currentCompany: "Vantage Cloud Partners",
    quote:
      "I already knew AWS from three years as a systems engineer. What I didn't know was how to find and fix the misconfigurations attackers actually look for first. That gap is exactly what this program closes.",
    outcomeChip: "Placed in 5 weeks",
    background: "Systems engineer transitioning into security",
    photoAlt: "Portrait of Sam Reyes, Cloud Security Engineer at Vantage Cloud Partners",
  },
  {
    id: "katie-nguyen",
    name: "Katie Nguyen",
    program: "Offensive Security Program",
    programSlug: "offensive-security-program",
    currentRole: "Associate Penetration Tester",
    currentCompany: "Ferrous Advisory",
    quote:
      "I taught high school chemistry for seven years. I was sure a program like this would look at my background and pass. Instead they built my application interview around how I'd explain a finding to a non-technical client — which, it turns out, is a teaching skill.",
    outcomeChip: "Placed in 11 weeks",
    hasVideo: true,
    background: "Career changer, former high school teacher",
    photoAlt: "Portrait of Katie Nguyen, Associate Penetration Tester at Ferrous Advisory",
  },
  {
    id: "diego-fuentes",
    name: "Diego Fuentes",
    program: "Advanced Red Team Certificate",
    programSlug: "advanced-red-team-certificate",
    currentRole: "Senior Security Consultant",
    currentCompany: "Cobalt Ridge Technologies",
    quote:
      "I'd been doing vulnerability scanning for four years and felt stuck. The Advanced Red Team Certificate is the only program I found that assumed I already knew the basics and took me straight into evasion and post-exploitation.",
    outcomeChip: "Promoted within 3 months",
    background: "4 years as a vulnerability analyst",
    photoAlt: "Portrait of Diego Fuentes, Senior Security Consultant at Cobalt Ridge Technologies",
  },
  {
    id: "whitney-park",
    name: "Whitney Park",
    program: "Offensive Security Program",
    programSlug: "offensive-security-program",
    currentRole: "Application Security Engineer",
    currentCompany: "Solace Financial",
    quote:
      "Lena's application security modules alone were worth the tuition. I went into interviews able to walk through a real authentication bypass I'd found in a lab, start to finish.",
    outcomeChip: "Placed in 6 weeks",
    background: "Self-taught developer, 2 years freelance web development",
    photoAlt: "Portrait of Whitney Park, Application Security Engineer at Solace Financial",
  },
];

export function getTestimonialsForProgram(programSlug: string) {
  return testimonials.filter((t) => t.programSlug === programSlug);
}

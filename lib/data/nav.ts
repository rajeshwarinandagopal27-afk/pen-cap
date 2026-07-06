export const primaryNav = [
  { label: "Programs", href: "/programs" },
  { label: "Cyber Range", href: "/cyber-range" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
] as const;

export const footerSitemap = {
  Programs: [
    { label: "Offensive Security Program", href: "/programs/offensive-security-program" },
    { label: "Certified Ethical Hacker (CEH)", href: "/programs/certified-ethical-hacker" },
    { label: "Security+ Foundations", href: "/programs/security-plus-foundations" },
    { label: "Cloud & DevSecOps", href: "/programs/cloud-devsecops-program" },
    { label: "All programs", href: "/programs" },
  ],
  Company: [
    { label: "About & Faculty", href: "/about" },
    { label: "Outcomes", href: "/outcomes" },
    { label: "Enterprise training", href: "/enterprise" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Cyber Range", href: "/cyber-range" },
    { label: "Pricing & financing", href: "/pricing" },
    { label: "Admissions", href: "/admissions" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/legal/privacy" },
    { label: "Terms of service", href: "/legal/terms" },
    { label: "Refund policy", href: "/pricing#refund-policy" },
  ],
} as const;

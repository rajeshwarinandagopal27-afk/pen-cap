export const siteConfig = {
  name: "SLT Technology",
  shortName: "SLT",
  tagline: "Sourced with Precision.",
  description:
    "SLT Technology is a B2B electronic-components sourcing and distribution partner for OEMs, EMS providers, industrial automation companies and engineering teams — global sourcing, BOM fulfilment and supply chain support, built around the RFQ.",
  url: "https://slt.tech",
  locale: "en_IN",
  contact: {
    email: "rfq@slt.tech",
    salesEmail: "sales@slt.tech",
    phone: "+91 80 4000 0000",
    address: "Bengaluru · Chennai · Pune, India",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

/** Primary navigation (Home is reached via the logo). */
export const mainNav: NavItem[] = [
  { title: "About", href: "/about", description: "The sourcing partner behind SLT Technology." },
  { title: "Solutions", href: "/solutions", description: "Sourcing, BOM fulfilment and supply chain services." },
  { title: "Products", href: "/products", description: "Thirteen component categories, one accountable source." },
  { title: "Industries", href: "/industries", description: "Domain expertise from automation to defense." },
  { title: "Global Sourcing", href: "/global-sourcing", description: "Worldwide supplier reach for hard-to-find parts." },
  { title: "Manufacturers", href: "/manufacturers", description: "Globally recognized brands we source." },
  { title: "Quality", href: "/quality", description: "Authenticity, traceability and inspection standards." },
  { title: "Contact", href: "/contact", description: "Talk to a sourcing engineer." },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Quality", href: "/quality" },
      { title: "Manufacturers", href: "/manufacturers" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Capabilities",
    items: [
      { title: "Solutions", href: "/solutions" },
      { title: "Products", href: "/products" },
      { title: "Industries", href: "/industries" },
      { title: "Global Sourcing", href: "/global-sourcing" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
];

/** Country list for the RFQ form — priority markets first, then alphabetical. */
export const countries: string[] = [
  "India",
  "United States",
  "Germany",
  "United Kingdom",
  "Singapore",
  "United Arab Emirates",
  "Japan",
  "South Korea",
  "China",
  "Taiwan",
  "Vietnam",
  "Australia",
  "Canada",
  "France",
  "Italy",
  "Netherlands",
  "Other",
];

export const industryOptions: string[] = [
  "OEM Manufacturing",
  "EMS",
  "Industrial Automation",
  "Medical Devices",
  "Defense",
  "Automotive",
  "EV",
  "Robotics",
  "IoT",
  "Electronics Design House",
  "Embedded Product Development",
  "Research Laboratory / University",
  "Other",
];

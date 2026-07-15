export const siteConfig = {
  name: "SLT Technology",
  shortName: "SLT",
  tagline: "Sourced with Precision.",
  description:
    "SLT Technology is a premium B2B electronic-components sourcing and distribution partner for India's manufacturers, OEMs and R&D teams — authentic parts, global reach, engineering-grade reliability.",
  url: "https://slt.tech",
  locale: "en_IN",
  contact: {
    email: "rfq@slt.tech",
    phone: "+91 80 4000 0000",
    whatsapp: "+91 80 4000 0000",
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
  { title: "Solutions", href: "/solutions", description: "Sourcing programs built around your production line." },
  { title: "Products", href: "/products", description: "Nine component families, one trusted source." },
  { title: "Industries", href: "/industries", description: "Domain expertise from robotics to EV to medical." },
  { title: "Manufacturers", href: "/manufacturers", description: "The franchise and authorized lines we source." },
  { title: "Quality", href: "/quality", description: "Traceability, testing and anti-counterfeit assurance." },
  { title: "About", href: "/about", description: "The team removing risk from hardware sourcing." },
  { title: "Contact", href: "/contact", description: "Talk to a sourcing engineer." },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Quality & Compliance", href: "/quality" },
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
      { title: "Request an RFQ", href: "/request-rfq" },
    ],
  },
];

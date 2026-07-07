export const siteConfig = {
  name: "PenCap Institute of Excellence",
  shortName: "PenCap",
  tagline: "Become a Cybersecurity Professional",
  description:
    "Chennai's premier cybersecurity training institute. Official EC-Council Accredited Training Center and CompTIA Authorized Training Partner offering CEH v13 AI, SOC Analyst, and Master Program courses with hands-on labs, industry mentors, and dedicated placement support.",
  url: "https://www.pencapinstitute.com",
  ogImage: "/og-image.png",
  locale: "en_IN",
  keywords: [
    "cybersecurity training Chennai",
    "ethical hacking course Chennai",
    "CEH certification Chennai",
    "SOC analyst training",
    "EC-Council accredited training center",
    "CompTIA authorized training partner",
    "cybersecurity institute India",
    "penetration testing course",
    "network security training",
    "cyber security course with placement",
  ],
  contact: {
    phone: "+91 44 4567 8900",
    phoneRaw: "+914445678900",
    whatsapp: "+919876543210",
    whatsappRaw: "919876543210",
    email: "admissions@pencapinstitute.com",
    address: {
      line1: "3rd Floor, Prestige Towers, OMR",
      line2: "Thoraipakkam",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600097",
      country: "India",
    },
    mapUrl: "https://maps.google.com/?q=Prestige+Towers+OMR+Thoraipakkam+Chennai",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/pencap-institute",
    instagram: "https://www.instagram.com/pencapinstitute",
    youtube: "https://www.youtube.com/@pencapinstitute",
    twitter: "https://x.com/pencapinstitute",
    facebook: "https://www.facebook.com/pencapinstitute",
  },
  hours: {
    weekday: "9:00 AM – 7:00 PM",
    weekend: "10:00 AM – 5:00 PM",
  },
  accreditations: ["EC-Council Accredited Training Center", "CompTIA Authorized Training Partner"],
} as const;

export type SiteConfig = typeof siteConfig;

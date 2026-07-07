export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "CEH v13 AI", href: "/courses/ceh-v13-ai", description: "Offensive security & ethical hacking certification" },
      { label: "SOC Analyst", href: "/courses/soc-analyst", description: "Live SOC monitoring & incident response" },
      { label: "Master Program", href: "/courses/master-program", description: "The complete 9-month career track" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Campus", href: "/campus" },
  { label: "Placements", href: "/placements" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

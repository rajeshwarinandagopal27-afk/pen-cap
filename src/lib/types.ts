export type Program = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  level: "Foundation" | "Advanced" | "Master";
  duration: string;
  format: string;
  batchSize: string;
  whoFor: string[];
  outcome: string;
  outcomes: string[];
  skills: string[];
  tools: string[];
  modules: { title: string; topics: string[] }[];
  certifications: string[];
  averageSalaryRange: string;
  jobRoles: string[];
  featured?: boolean;
  accentColor: "royal" | "navy" | "red";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  quote: string;
  rating: number;
  source: "Google" | "LinkedIn" | "Video";
  avatarInitials: string;
  videoThumbnail?: string;
};

export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  experienceYears: number;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export type PlacementPartner = {
  name: string;
};

export type JobRole = {
  title: string;
  salaryRange: string;
  description: string;
};

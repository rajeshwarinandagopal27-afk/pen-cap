export type Level = "beginner" | "intermediate" | "advanced";
export type Format = "cohort" | "self-paced";
export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface CurriculumModule {
  weekRange: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  category: "offensive" | "defensive" | "cloud" | "advanced";
  tagline: string;
  level: Level;
  format: Format;
  durationWeeks: number;
  nextCohort: string;
  seatsRemaining: number;
  totalSeats: number;
  priceUsd: number;
  outcomeStat: string;
  outcomeStatLabel: string;
  skills: string[];
  description: string;
  idealFor: string[];
  notIdealFor: { text: string; alternativeSlug?: string }[];
  prerequisites: string[];
  curriculum: CurriculumModule[];
  facultySlugs: string[];
  testimonialIds: string[];
}

export interface FacultyMember {
  slug: string;
  name: string;
  title: string;
  credibilityLine: string;
  bio: string;
  credentials: string[];
  photoAlt: string;
  programs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  programSlug: string;
  currentRole: string;
  currentCompany: string;
  quote: string;
  outcomeChip?: string;
  hasVideo?: boolean;
  background: string;
  photoAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EmployerCaseStudy {
  company: string;
  industry: string;
  headline: string;
  result: string;
  quote: string;
  attributedTo: string;
}

export interface CyberRangeCategory {
  slug: string;
  name: string;
  description: string;
  challengeCount: number;
  difficulty: RiskLevel;
}

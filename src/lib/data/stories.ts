export interface StudentStory {
  testimonialId: string;
  beforeLine: string;
  confidenceBefore: number;
  confidenceAfter: number;
  salaryLift: number;
}

/**
 * Supplemental narrative data joined against /lib/data/testimonials.ts by id,
 * powering the Chapter 7 before/journey/after story format.
 */
export const studentStories: StudentStory[] = [
  {
    testimonialId: "jordan-ellis",
    beforeLine: "Six years as a network admin, told repeatedly he needed a CS degree to move into security.",
    confidenceBefore: 31,
    confidenceAfter: 88,
    salaryLift: 46,
  },
  {
    testimonialId: "aisha-bello",
    beforeLine: "Medical records technician who had never opened a terminal.",
    confidenceBefore: 22,
    confidenceAfter: 84,
    salaryLift: 52,
  },
  {
    testimonialId: "sam-reyes",
    beforeLine: "Systems engineer who knew AWS, but not how attackers actually look at it.",
    confidenceBefore: 44,
    confidenceAfter: 91,
    salaryLift: 38,
  },
  {
    testimonialId: "katie-nguyen",
    beforeLine: "Seven years teaching high school chemistry, certain her application would be rejected.",
    confidenceBefore: 19,
    confidenceAfter: 82,
    salaryLift: 61,
  },
];

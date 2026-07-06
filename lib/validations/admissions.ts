import { z } from "zod";

export const eligibilitySchema = z.object({
  experienceLevel: z.enum(["none", "some-it", "1-3-years", "3-plus-years"], {
    message: "Choose the option that fits best",
  }),
  careerGoal: z.enum(["offensive", "defensive", "grc", "cloud", "not-sure"], {
    message: "Choose a goal",
  }),
  timeAvailability: z.enum(["under-10", "10-15", "15-20", "20-plus"], {
    message: "Choose your availability",
  }),
  targetStart: z.enum(["asap", "3-months", "6-months", "exploring"], {
    message: "Choose a timeframe",
  }),
  sponsored: z.boolean(),
});
export type EligibilityValues = z.infer<typeof eligibilitySchema>;

export const accountSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});
export type AccountValues = z.infer<typeof accountSchema>;

export const profileBasicSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  location: z.string().min(2, "Enter your city"),
  targetProgram: z.string().min(1, "Choose a program"),
});
export type ProfileBasicValues = z.infer<typeof profileBasicSchema>;

export const profileBackgroundSchema = z.object({
  currentRole: z.enum(
    ["student", "it-professional", "non-it-professional", "career-break", "other"],
    { message: "Choose the option that fits best" },
  ),
  backgroundDetail: z.string().max(600).optional(),
});
export type ProfileBackgroundValues = z.infer<typeof profileBackgroundSchema>;

export const profileMotivationSchema = z.object({
  motivation: z.string().min(20, "A couple of sentences is enough — just no fewer than 20 characters"),
});
export type ProfileMotivationValues = z.infer<typeof profileMotivationSchema>;

export const interviewSchema = z.object({
  slot: z.string().min(1, "Pick a time slot"),
});
export type InterviewValues = z.infer<typeof interviewSchema>;

export const enrollmentSchema = z.object({
  financingOption: z.string().min(1, "Choose a financing option"),
});
export type EnrollmentValues = z.infer<typeof enrollmentSchema>;

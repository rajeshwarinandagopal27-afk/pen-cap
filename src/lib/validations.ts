import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Enter your email address.").email("Enter a valid email address."),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const contactSchema = z.object({
  intent: z.enum(["enroll", "enterprise"], {
    message: "Choose what you'd like to talk about.",
  }),
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().min(1, "Enter your email address.").email("Enter a valid email address."),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)."),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const enterpriseSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  workEmail: z.string().trim().min(1, "Enter your work email.").email("Enter a valid email address."),
  company: z.string().trim().min(2, "Enter your company name."),
  teamSize: z.enum(["1-10", "11-50", "51-200", "201+"], { message: "Select a team size." }),
  goals: z.string().trim().min(10, "Tell us about your team's goals (at least 10 characters)."),
});
export type EnterpriseInput = z.infer<typeof enterpriseSchema>;

export const eligibilitySchema = z.object({
  experienceLevel: z.enum(["none", "adjacent-it", "some-security", "experienced"], {
    message: "Select your current experience level.",
  }),
  goal: z.enum(["offensive", "defensive", "cloud", "advance-existing-career"], {
    message: "Select your primary goal.",
  }),
  hoursPerWeek: z.enum(["under-10", "10-15", "15-20", "20-plus"], {
    message: "Select your available hours per week.",
  }),
  targetStart: z.enum(["asap", "1-3-months", "3-6-months", "exploring"], {
    message: "Select your target start window.",
  }),
});
export type EligibilityInput = z.infer<typeof eligibilitySchema>;

export const applicationStep1Schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().min(1, "Enter your email address.").email("Enter a valid email address."),
  location: z.string().trim().min(2, "Enter your city and state/country."),
  targetCohort: z.string().trim().min(1, "Select a cohort date."),
});
export type ApplicationStep1Input = z.infer<typeof applicationStep1Schema>;

export const applicationStep2Schema = z.object({
  currentRole: z.string().trim().min(2, "Tell us your current role or situation."),
  background: z.string().trim().min(20, "Give us at least a couple of sentences (20+ characters)."),
});
export type ApplicationStep2Input = z.infer<typeof applicationStep2Schema>;

export const applicationStep3Schema = z.object({
  motivation: z.string().trim().min(40, "Give us at least a few sentences (40+ characters)."),
});
export type ApplicationStep3Input = z.infer<typeof applicationStep3Schema>;

export const applicationFullSchema = applicationStep1Schema
  .merge(applicationStep2Schema)
  .merge(applicationStep3Schema)
  .extend({
    programSlug: z.string().trim().min(1),
  });
export type ApplicationInput = z.infer<typeof applicationFullSchema>;

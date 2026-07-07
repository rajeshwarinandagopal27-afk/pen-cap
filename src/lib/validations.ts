import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number"),
  program: z.string().trim().min(1, "Select a program"),
  message: z.string().trim().max(600).optional().or(z.literal("")),
  consent: z.boolean().refine((val) => val === true, "Please accept to be contacted"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

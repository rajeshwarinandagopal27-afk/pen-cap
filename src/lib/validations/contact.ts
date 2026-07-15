import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120),
  company: z.string().trim().min(2, "Enter your company name.").max(120),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9+()\-\s]*$/, "Use digits and phone symbols only.")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Add a few more details so we can help.").max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

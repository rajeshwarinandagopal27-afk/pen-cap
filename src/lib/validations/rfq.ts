import { z } from "zod";

export const ACCEPTED_BOM_EXTENSIONS = [".csv", ".xlsx", ".xls", ".pdf"];
export const MAX_BOM_SIZE_MB = 15;

const isBrowserFile = (value: unknown): value is File =>
  typeof File !== "undefined" && value instanceof File;

export const bomFileSchema = z
  .custom<File>(isBrowserFile, { message: "Attach a valid file." })
  .refine((file) => file.size <= MAX_BOM_SIZE_MB * 1024 * 1024, {
    message: `File must be smaller than ${MAX_BOM_SIZE_MB}MB.`,
  })
  .refine((file) => ACCEPTED_BOM_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext)), {
    message: `Accepted formats: ${ACCEPTED_BOM_EXTENSIONS.join(", ")}.`,
  });

export const rfqSchema = z.object({
  companyName: z.string().trim().min(2, "Enter your company name.").max(120),
  contactPerson: z.string().trim().min(2, "Enter a contact name.").max(120),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Use digits and phone symbols only."),
  country: z.string().min(1, "Select a country."),
  state: z.string().trim().min(1, "Enter a state or region.").max(100),
  industry: z.string().min(1, "Select an industry."),
  requiredDeliveryDate: z.string().optional().or(z.literal("")),
  notes: z.string().trim().max(2000, "Keep additional notes under 2000 characters.").optional().or(z.literal("")),
  bomFile: bomFileSchema.nullable().optional(),
  consent: z.boolean().refine((v) => v === true, { message: "Please confirm before submitting." }),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;

/** Server-side variant — bomFile arrives from FormData as File | null, already handled above. */
export const rfqServerSchema = rfqSchema;

import { z } from "zod";

export const companySchema = z.object({
    name: z.string().min(2, "Company name must be at least 2 characters").max(50),
    description: z.string().min(10, "Description must be at least 10 characters").optional().or(z.literal("")),
    website: z.string().url("Wait, this must be a valid URL (like https://google.com)").optional().or(z.literal("")),
    location: z.string().min(2, "Location must be at least 2 characters").optional().or(z.literal("")),
});
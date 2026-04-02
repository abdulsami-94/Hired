"use server"

import { prisma } from "@/lib/prisma";
import { companySchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function createCompany(formData: unknown) {
    // 1. Kick out bad data with zod
    const result = companySchema.safeParse(formData);

    if (!result.success) {
        // Collect error messages
        const errorMessages = result.error.errors.map(err =>
            err.message).join(", ");
        throw new Error(`Invalid data: ${errorMessages}`);
    }

    // 2. If data is safe, save it to the Database
    const newCompany = await prisma.company.create({
        data: result.data,
    });

    // 3. Clear the cache so the page shows the new company immediately
    revalidatePath("/");

    return { success: true, company: newCompany};
}
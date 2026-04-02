# MEMORY — Hired
Last updated: 2026-04-02

## Project
Name: Hired
Description: A senior-level hiring platform with AI integration and role-based access.
Stack: Next.js 15, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Zod, Auth.js/Clerk, Uploadthing.
Repo: Not yet linked.

## Roadmap Stage
Milestone: Milestone 1 — The Foundation
Current Task: Validating data with Zod and creating Server Actions

## Completed
- Next.js and TypeScript project setup.
- Initial Prisma schema design (Company, Job, Candidate, Application models).
- Prisma Client singleton instance created in `src/lib/prisma.ts`.
- Installed dependencies: `zod`, `@prisma/client`.

## Last Session Summary
We kicked off the project and audited the roadmap. We fixed errors in the Prisma schema (including typos like `jobID` vs `jobId`) and added the `Candidate` and `Application` models to support complex hiring workflows. We also set up a safe Prisma connection singleton to prevent connection leaks.

## Next Task
Define our first Zod validation schema for creating a Company and write our first Server Action.

## Watch Out For
- Case sensitivity in Prisma field names (e.g., `jobId` vs `jobID`).
- Pluralization conventions for model relationships in the schema.

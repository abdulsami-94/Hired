# MEMORY — Hired
Last updated: 2026-04-02

## Project
Name: Hired
Description: A senior-level hiring platform with AI integration and role-based access.
Stack: Next.js 15, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Zod, Auth.js/Clerk, Uploadthing.
Repo: Not yet linked.

## Roadmap Stage
Milestone: Milestone 2 — Security
Current Task: Auth.js / Clerk (RBAC) Setup

## Completed
- Next.js and TypeScript project setup.
- Initial Prisma schema design (Company, Job, Candidate, Application models).
- Prisma Client singleton instance created in `src/lib/prisma.ts`.
- Installed dependencies: `zod`, `@prisma/client`.
- Milestone 1 — The Foundation (Database, Zod Validation, Server Actions).

## Session History
- **Session #1 (2026-04-02):** Kicked off project and audited roadmap. Completed Milestone 1 by fixing Prisma schema casing errors, building a safe database singleton, and implementing Zod validation for our first Server Action (`createCompany`).

## Last Session Summary
We completed Milestone 1: The Foundation. The database is now ready with a strict Prisma schema and Zod validation, and we have a working Server Action for creating companies.

## Next Task
Set up Auth.js or Clerk to implement Role-Based Access Control (RBAC).

## Watch Out For
- Case sensitivity in Prisma field names (e.g., `jobId` vs `jobID`).
- Pluralization conventions for model relationships in the schema.

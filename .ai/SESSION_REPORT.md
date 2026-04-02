---
Session #1 | 2026-04-02 | Hired
Task: Milestone 1 — The Foundation

## What We Built
We built the core "plumbing" of the Hired application. This included fixing and expanding the database schema to handle Companies, Jobs, Candidates, and Applications. We also set up a safe database connection singleton, added data validation with Zod, and wrote our first Server Action to handle secure data creation.

## Bugs Encountered
- Bug: Duplicate `datasource` blocks and case-sensitivity errors (`jobID` vs `jobId`) in the Prisma schema.
  File: `prisma/schema.prisma`
  Cause: Manual editing without verification of field names and Prisma's case-sensitivity rules.

## How Each Bug Was Fixed
- Fix: Cleaned up duplicate blocks and standardized field casing.
  Why it worked: Prisma requires strict casing consistency across relation fields to correctly link tables.

## Concepts Learned
- Prisma Singleton: Why we use `globalThis` to prevent connection leaks during Next.js development.
- Zod Validation: Moving from "trusting user input" to "validating by default" before it reaches the DB.
- Server Actions: How to perform server-side mutations directly from JS functions with the `"use server"` directive.

## Mistakes To Avoid Next Time
- Always double-check casing in `@relation` fields in Prisma.
- Ensure `provider = "prisma-client-js"` has the `-js` suffix.

## Skills Improved
- Database Modeling
- Type Safety with Zod
- Next.js Server-side Logic

## Next Session
Milestone 2: Security — Implementing Auth.js/Clerk for Role-Based Access Control (RBAC).
---

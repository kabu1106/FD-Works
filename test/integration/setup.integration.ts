// test/setup.integration.ts
import { beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";

const workerId = process.env.VITEST_WORKER_ID || "0";
const schema = `integration_${workerId}`;

const databaseUrl =
  process.env.DATABASE_URL_TEST || process.env.DATABASE_URL;

process.env.DATABASE_URL = `${databaseUrl}?schema=${schema}`;

export const prismaTest = new PrismaClient();

let migrated = false;

beforeAll(async () => {
  await prismaTest.$executeRawUnsafe(
    `CREATE SCHEMA IF NOT EXISTS "${schema}"`
  );

  if (!migrated) {
    await prismaTest.$executeRawUnsafe(
      `SELECT pg_advisory_lock(987654321);`
    );

    try {
      execSync("npx dotenv -e .env.test -- npx prisma migrate deploy", {
        stdio: "inherit",
      });
      migrated = true;
    } finally {
      await prismaTest.$executeRawUnsafe(
        `SELECT pg_advisory_unlock(987654321);`
      );
    }
  }
},60000);

afterAll(async () => {
  await prismaTest.$executeRawUnsafe(
    `DROP SCHEMA IF EXISTS "${schema}" CASCADE`
  );
  await prismaTest.$disconnect();
});

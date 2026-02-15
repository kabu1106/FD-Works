// src/test/integration/setup.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function clearDatabase() {
  const tablenames = ["EventStore", "work_group_assignments", "duties"];
  for (const tablename of tablenames) {
    await prisma.$queryRawUnsafe(`TRUNCATE TABLE "${tablename}" CASCADE;`);
  }
}

export { prisma };
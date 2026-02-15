// src/test/prisma.ts
import { PrismaClient } from "@prisma/client";

// 実装コードの prisma インスタンスとは別に、テスト専用の接続を管理
export const prismaTest = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_TEST || process.env.DATABASE_URL,
    },
  },
});
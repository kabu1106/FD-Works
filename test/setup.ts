// src/test/setup.ts
import { beforeAll, beforeEach, afterAll } from "vitest";
import { prismaTest } from "./prisma";

beforeAll(async () => {
  // DB接続確認
  await prismaTest.$connect();
});

beforeEach(async () => {
  // 全てのテーブルをクリーンアップ（依存関係を考慮した順序、またはTRUNCATE）
  // 注意: 外部キー制約があるため、順番に消すか CASCADE を使用
  const tables = [
    "ProjectionCheckpoint",
    "StaffInVehicle",
    "DispatchedVehicle",
    "IncidentReadModel",
    "EventStore",
    // 必要に応じて他のテーブルも追加
  ];

  for (const table of tables) {
    try {
      await (prismaTest as any)[table.charAt(0).toLowerCase() + table.slice(1)].deleteMany();
    } catch (e) {
      // モデルが存在しない場合などのエラー回避
    }
  }
});

afterAll(async () => {
  await prismaTest.$disconnect();
});
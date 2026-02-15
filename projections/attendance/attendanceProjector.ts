// src/infra/projection/attendance/attendanceProjector.ts
import { EventStore, PrismaClient } from "@prisma/client";
import { IProjector } from "../shared/IProjector";
import { AttendanceTimelineProjection } from "@/projections/attendance/attendanceTimelineProjection";
import { createInitialTimelineState, TimelineState } from "@/domain/attendance/attendanceTimelineTypes";

export class AttendanceProjector implements IProjector {
  readonly name = "AttendanceTimeline";
  private projection = new AttendanceTimelineProjection();

  constructor(private readonly prisma: PrismaClient) {}

  async project(events: EventStore[]): Promise<void> {
    // 1. イベントを職員(staffId) × 勤務日(dutyId) ごとにグループ化
    // 同一バッチ内に複数の職員のイベントが含まれる可能性があるため
    const groupedEvents = this.groupEventsByKey(events);

    for (const [key, stream] of Object.entries(groupedEvents)) {
      const [staffIdStr, dutyId] = key.split(":");
      const staffId = parseInt(staffIdStr, 10);

      await this.prisma.$transaction(async (tx) => {
        // 2. 現在の状態を計算するために、既存のスロット（Attendance）をロード、
        // もしくは最初から計算するために既存データを削除して再構築する戦略をとる
        // ここでは「常に最新のイベント群からスロットを再生成する」シンプルかつ強力な方法を採用
        
        // 注意: 本来は EventStore から過去の全イベントを引くべきだが、
        // パフォーマンスのため前回までの計算結果(State)をDBに保存しておく設計もレベル300では一般的
        
        let state: TimelineState = createInitialTimelineState();

        // 3. イベントを順番に適用
        for (const eventRecord of stream) {
          const domainEvent = eventRecord.payload as any;
          state = this.projection.project(state, domainEvent);
        }

        // 4. 計算されたスロットを DB (Attendanceテーブル) に反映
        // 既存の該当職員・該当日のスロットを一度消して入れ替える（Replace戦略）
        await tx.attendance.deleteMany({
          where: {
            staffId: staffId,
            dutyId: dutyId,
          },
        });

        if (state.slots.length > 0) {
          // Attendance モデルの構造に合わせてマッピングして保存
          // Prismaのスキーマ定義に基づき適宜調整してください
          for (const slot of state.slots) {
            await tx.attendance.create({
              data: {
                staffId: slot.staffId,
                dutyId: slot.dutyId,
                type: this.mapSlotTypeToAttendanceType(slot.type),
                startTime: new Date(slot.startAt),
                endTime: slot.endAt ? new Date(slot.endAt) : new Date(), // 未終了は現在時刻等で仮置き
                departmentId: 1, // 実務ではイベントや職員マスターから取得
              },
            });
          }
        }
      });
    }
  }

  private groupEventsByKey(events: EventStore[]) {
    return events.reduce((acc, event) => {
      const payload = event.payload as any;
      const key = `${payload.staffId}:${payload.dutyId}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(event);
      return acc;
    }, {} as Record<string, EventStore[]>);
  }

  private mapSlotTypeToAttendanceType(type: "work" | "break") {
    // スキーマの AttendanceEventType (WORK_STARTED等) や 
    // モデル構造に合わせて変換
    return type === "work" ? "WORK_STARTED" : "BREAK_STARTED";
  }
}
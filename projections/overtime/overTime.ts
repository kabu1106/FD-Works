// src/projection/overtime/OvertimeSlot.ts

export interface OvertimeSlot {
    dutyId: string;
    staffId: number;
    startAt: string;
    endAt: string;
  }

  export interface OvertimeRateSlot {
    dutyId: string;
    staffId: number;
    startAt: string;
    endAt: string;
    rate: number; // 1.25 / 1.5 / 1.35 / 1.6
  }
  
export type AttendanceCommand =
  | {
      type: "StartWork";
      dutyId: string;
      staffId: number;
      at: string;
    }
  | {
      type: "StartBreak";
      dutyId: string;
      staffId: number;
      at: string;
    }
  | {
      type: "EndBreak";
      dutyId: string;
      staffId: number;
      at: string;
    }
  | {
      type: "EndWork";
      dutyId: string;
      staffId: number;
      at: string;
    };

// src/domain/duty/DutyCommands.ts

export type DutyCommand =
  | {
      type: "CreateDuty";
      dutyId: string;
      teamId: number;
      date: string;
    }
  | {
      type: "AssignStaffToDuty";
      dutyId: string;
      staffId: number;
    }
  | {
      type: "UnassignStaffFromDuty";
      dutyId: string;
      staffId: number;
    }
  | {
      type: "AssignWorkGroupToStaff";
      dutyId: string;
      staffId: number;
      workGroupId: number;
    }
  | {
      type: "ChangeWorkGroupAssignment";
      dutyId: string;
      staffId: number;
      workGroupId: number;
    }
  | {
      type: "ApproveDuty";
      dutyId: string;
      approvedBy: string;
    }
  | {
      type: "RevokeDutyApproval";
      dutyId: string;
      reason: string;
    }
  | {
      type: "LockDuty";
      dutyId: string;
    }
  | {
      type: "MarkDutyForRecalculation";
      dutyId: string;
      reason: string;
    };

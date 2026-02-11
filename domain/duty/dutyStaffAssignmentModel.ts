// src/projection/duty/DutyStaffAssignmentModel.ts

export interface DutyStaffAssignment {
    dutyId: string;
    date: string;
    teamId: number;
    staffId: number;
    workGroupId: number | null;
    status: "assigned" | "unassigned";
  }
  
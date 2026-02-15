// src/application/queries/duty/dutyDTO.ts

export interface DutyStaffDetailDTO {
    staffId: number;
    staffName: string;
    workGroupId: number;
    workGroupName: string;
  }
  
  export interface DutyDetailDTO {
    id: string;
    date: string;
    teamId: number;
    teamName: string;
    status: string;
    isLocked: boolean;
    assignedStaffs: DutyStaffDetailDTO[];
  }
import { EventBase } from "../shared/base"

export type DutyEvent =
  | DutyCreated
  | StaffAssignedToDuty
  | StaffUnassignedFromDuty
  | WorkGroupAssignedToStaff
  | WorkGroupAssignmentChanged
  | DutyApproved
  | DutyApprovalRevoked
  | DutyLocked
  | DutyMarkedForRecalculation


export type DutyCreated = EventBase<
  "DutyCreated",
  {
    dutyId: string
    date: string // YYYY-MM-DD
    teamId: number
  }
>

export type StaffAssignedToDuty = EventBase<
  "StaffAssignedToDuty",
  {
    dutyId: string
    staffId: number
  }
>

export type StaffUnassignedFromDuty = EventBase<
  "StaffUnassignedFromDuty",
  {
    dutyId: string
    staffId: number
    reason: string
  }
>

export type WorkGroupAssignedToStaff = EventBase<
  "WorkGroupAssignedToStaff",
  {
    dutyId: string
    staffId: number
    workGroupId: number
  }
>

export type WorkGroupAssignmentChanged = EventBase<
  "WorkGroupAssignmentChanged",
  {
    dutyId: string
    staffId: number
    oldWorkGroupId: number
    newWorkGroupId: number
    reason: string
  }
>

export type DutyApproved = EventBase<
  "DutyApproved",
  {
    dutyId: string
    approvedBy: string
  }
>

export type DutyApprovalRevoked = EventBase<
  "DutyApprovalRevoked",
  {
    dutyId: string
    reason: string
  }
>

export type DutyLocked = EventBase<
  "DutyLocked",
  {
    dutyId: string
  }
>

export type DutyMarkedForRecalculation = EventBase<
  "DutyMarkedForRecalculation",
  {
    dutyId: string
    reason: string
  }
>

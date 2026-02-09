import { z } from "zod"

/* Calendar */
import {
  HolidayRegistered,
  WeeklyDayOffRegistered,
  WeeklyDayOffChanged,
  SubstituteHolidayDecided,
  DisasterDayRegistered,
} from "../calendar/calendar-events"

/* Definition */
import {
  SleepTimeDefined,
  SleepTimeDefinitionChanged,
  OvertimeRuleDefined,
  OvertimeRuleChanged,
} from "../definition/definition-events"

/* Duty */
import {
  DutyCreated,
  StaffAssignedToDuty,
  StaffUnassignedFromDuty,
  WorkGroupAssignedToStaff,
  WorkGroupAssignmentChanged,
  DutyApproved,
  DutyApprovalRevoked,
  DutyLocked,
  DutyMarkedForRecalculation,
} from "../duty/duty-events"

/* Attendance */
import {
  WorkStarted,
  BreakStarted,
  BreakEnded,
  WorkEnded,
} from "../attendance/attendance-events"

/* Incident */
import {
  IncidentOccurred,
  VehicleDispatched,
  StaffBoarded,
  VehicleReturned,
  IncidentClosed,
} from "../incident/incident-events"

export type AggregateEvent =
  | HolidayRegistered
  | WeeklyDayOffRegistered
  | WeeklyDayOffChanged
  | SubstituteHolidayDecided
  | DisasterDayRegistered
  | SleepTimeDefined
  | SleepTimeDefinitionChanged
  | OvertimeRuleDefined
  | OvertimeRuleChanged
  | DutyCreated
  | StaffAssignedToDuty
  | StaffUnassignedFromDuty
  | WorkGroupAssignedToStaff
  | WorkGroupAssignmentChanged
  | DutyApproved
  | DutyApprovalRevoked
  | DutyLocked
  | DutyMarkedForRecalculation
  | WorkStarted
  | BreakStarted
  | BreakEnded
  | WorkEnded
  | IncidentOccurred
  | VehicleDispatched
  | StaffBoarded
  | VehicleReturned
  | IncidentClosed

import { WorkStarted, BreakStarted, BreakEnded, WorkEnded } from "../attendance/attendance-events";
import { BreakEndedSchema } from "../attendance/breakEndedSchema";
import { BreakStartedSchema } from "../attendance/breakStartedSchema";
import { WorkEndedSchema } from "../attendance/workEndedSchema";
import { WorkStartedSchema } from "../attendance/workStartedSchema";
import { HolidayRegistered, WeeklyDayOffRegistered, WeeklyDayOffChanged, SubstituteHolidayDecided, DisasterDayRegistered } from "../calendar/calendar-events";
import { DisasterDayRegisteredSchema } from "../calendar/disasterDayRegisteredSchema";
import { HolidayRegisteredSchema } from "../calendar/holidayRegisteredSchema";
import { SubstituteHolidayDecidedSchema } from "../calendar/substituteHolidayDecidedSchema";
import { WeeklyDayOffChangedSchema } from "../calendar/weeklyDayOffChangedSchema";
import { WeeklyDayOffRegisteredSchema } from "../calendar/weeklyDayOffRegisteredSchema";
import { SleepTimeDefined, SleepTimeDefinitionChanged, OvertimeRuleDefined, OvertimeRuleChanged } from "../definition/definition-events";
import { OvertimeRuleChangedSchema } from "../definition/overtimeRuleChangedSchema";
import { OvertimeRuleDefinedSchema } from "../definition/overtimeRuleDefinedSchema";
import { SleepTimeDefinedSchema } from "../definition/sleepTimeDefinedSchema";
import { SleepTimeDefinitionChangedSchema } from "../definition/sleepTimeDefinitionChangedSchema";
import { DutyCreated, StaffAssignedToDuty, StaffUnassignedFromDuty, WorkGroupAssignedToStaff, WorkGroupAssignmentChanged, DutyApproved, DutyApprovalRevoked, DutyLocked, DutyMarkedForRecalculation } from "../duty/duty-events";
import { DutyApprovalRevokedSchema } from "../duty/dutyApprovalRevokedSchema";
import { DutyApprovedSchema } from "../duty/dutyApprovedSchema";
import { DutyCreatedSchema } from "../duty/dutyCreatedSchema";
import { DutyLockedSchema } from "../duty/dutyLockedSchema";
import { DutyMarkedForRecalculationSchema } from "../duty/dutyMarkedForRecalculationSchema";
import { StaffAssignedToDutySchema } from "../duty/staffAssignedToDutySchema";
import { StaffUnassignedFromDutySchema } from "../duty/staffUnassignedFromDutySchema";
import { WorkGroupAssignedToStaffSchema } from "../duty/workGroupAssignedToStaffSchema";
import { WorkGroupAssignmentChangedSchema } from "../duty/workGroupAssignmentChangedSchema";
import { IncidentOccurred, VehicleDispatched, StaffBoarded, VehicleReturned, IncidentClosed } from "../incident/incident-events";
import { IncidentClosedSchema } from "../incident/incidentClosedSchema";
import { IncidentOccurredSchema } from "../incident/incidentOccurredSchema";
import { StaffBoardedSchema } from "../incident/staffBoardedSchema";
import { VehicleDispatchedSchema } from "../incident/vehicleDispatchedSchema";
import { VehicleReturnedSchema } from "../incident/vehicleReturnedSchema";
import { DutyDayTypeDeterminedSchema } from "../projection/dutyDayTypeDeterminedSchema";
import { IncidentAllowanceCalculatedSchema } from "../projection/incidentAllowanceCalculatedSchema";
import { IncidentAllowanceFinalizedSchema } from "../projection/incidentAllowanceFinalizedSchema";
import { OvertimeCalculatedSchema } from "../projection/overtimeCalculatedSchema";
import { OvertimeFinalizedSchema } from "../projection/overtimeFinalizedSchema";
import { OvertimeSlotResolvedSchema } from "../projection/overtimeSlotResolvedSchema";
import { DutyDayTypeDetermined, OvertimeSlotResolved, OvertimeCalculated, OvertimeFinalized, IncidentAllowanceCalculated, IncidentAllowanceFinalized } from "../projection/projection-events";

import { z } from "zod"

export const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
export const DateTimeSchema = z.string().datetime()

export const DomainEventSchema = z.discriminatedUnion("eventType", [
  HolidayRegisteredSchema,
  WeeklyDayOffRegisteredSchema,
  WeeklyDayOffChangedSchema,
  DisasterDayRegisteredSchema,
  SubstituteHolidayDecidedSchema,

  SleepTimeDefinedSchema,
  SleepTimeDefinitionChangedSchema,
  OvertimeRuleDefinedSchema,
  OvertimeRuleChangedSchema,

  DutyCreatedSchema,
  StaffAssignedToDutySchema,
  StaffUnassignedFromDutySchema,
  WorkGroupAssignedToStaffSchema,
  WorkGroupAssignmentChangedSchema,
  DutyApprovedSchema,
  DutyApprovalRevokedSchema,
  DutyLockedSchema,
  DutyMarkedForRecalculationSchema,

  WorkStartedSchema,
  BreakStartedSchema,
  BreakEndedSchema,
  WorkEndedSchema,

  IncidentOccurredSchema,
  VehicleDispatchedSchema,
  StaffBoardedSchema,
  VehicleReturnedSchema,
  IncidentClosedSchema,

  DutyDayTypeDeterminedSchema,
  OvertimeSlotResolvedSchema,
  OvertimeCalculatedSchema,
  OvertimeFinalizedSchema,
  IncidentAllowanceCalculatedSchema,
  IncidentAllowanceFinalizedSchema,
])

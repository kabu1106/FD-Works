import z from "zod"
import { EventBase } from "../shared/base"
import { DutyDayTypeDeterminedSchema } from "./dutyDayTypeDeterminedSchema"
import { IncidentAllowanceCalculatedSchema } from "./incidentAllowanceCalculatedSchema"
import { IncidentAllowanceFinalizedSchema } from "./incidentAllowanceFinalizedSchema"
import { OvertimeCalculatedSchema } from "./overtimeCalculatedSchema"
import { OvertimeFinalizedSchema } from "./overtimeFinalizedSchema"
import { OvertimeSlotResolvedSchema } from "./overtimeSlotResolvedSchema"

export type ProjectionEvent =
  | DutyDayTypeDetermined
  | OvertimeSlotResolved
  | OvertimeCalculated
  | OvertimeFinalized
  | IncidentAllowanceCalculated
  | IncidentAllowanceFinalized


  export const ProjectionEventSchema = z.discriminatedUnion("eventType", [
    DutyDayTypeDeterminedSchema,
    OvertimeSlotResolvedSchema,
    OvertimeCalculatedSchema,
    OvertimeFinalizedSchema,
    IncidentAllowanceCalculatedSchema,
    IncidentAllowanceFinalizedSchema,
  ])
  

export type DutyDayTypeDetermined = EventBase<
  "DutyDayTypeDetermined",
  {
    dutyId: string
    staffId: number
    dutyDayType:
      | "WEEKDAY"
      | "HOLIDAY"
      | "SUBSTITUTE_HOLIDAY"
      | "DISASTER_DAY"
  }
>

export type OvertimeSlotResolved = EventBase<
  "OvertimeSlotResolved",
  {
    dutyId: string
    staffId: number
    start: string
    end: string
    rateCategoryId: number
  }
>

export type OvertimeCalculated = EventBase<
  "OvertimeCalculated",
  {
    dutyId: string
    staffId: number
    totalMinutes: number
  }
>

export type OvertimeFinalized = EventBase<
  "OvertimeFinalized",
  {
    dutyId: string
    staffId: number
    finalizedAt: string
  }
>

export type IncidentAllowanceCalculated = EventBase<
  "IncidentAllowanceCalculated",
  {
    incidentId: string
    staffId: number
    allowanceTypeId: number
    count: number
  }
>

export type IncidentAllowanceFinalized = EventBase<
  "IncidentAllowanceFinalized",
  {
    incidentId: string
    staffId: number
  }
>

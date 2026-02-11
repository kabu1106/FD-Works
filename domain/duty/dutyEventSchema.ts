// src/domain/duty/dutyEventSchema.ts
import { z } from "zod";

const DutyId = z.string().uuid();
const StaffId = z.number().int();
const WorkGroupId = z.number().int();

export const DutyCreatedSchema = z.object({
  eventType: z.literal("DutyCreated"),
  payload: z.object({
    dutyId: DutyId,
    teamId: z.number().int(),
    date: z.string(), // ISO date
  }),
});

export const StaffAssignedToDutySchema = z.object({
  eventType: z.literal("StaffAssignedToDuty"),
  payload: z.object({
    dutyId: DutyId,
    staffId: StaffId,
  }),
});

export const StaffUnassignedFromDutySchema = z.object({
  eventType: z.literal("StaffUnassignedFromDuty"),
  payload: z.object({
    dutyId: DutyId,
    staffId: StaffId,
  }),
});

export const WorkGroupAssignedToStaffSchema = z.object({
  eventType: z.literal("WorkGroupAssignedToStaff"),
  payload: z.object({
    dutyId: DutyId,
    staffId: StaffId,
    workGroupId: WorkGroupId,
  }),
});

export const WorkGroupAssignmentChangedSchema = z.object({
  eventType: z.literal("WorkGroupAssignmentChanged"),
  payload: z.object({
    dutyId: DutyId,
    staffId: StaffId,
    oldWorkGroupId: WorkGroupId,
    newWorkGroupId: WorkGroupId,
    reason: z.string(),
  }),
});

export const DutyApprovedSchema = z.object({
  eventType: z.literal("DutyApproved"),
  payload: z.object({
    dutyId: DutyId,
    approvedBy: z.string(),
  }),
});

export const DutyApprovalRevokedSchema = z.object({
  eventType: z.literal("DutyApprovalRevoked"),
  payload: z.object({
    dutyId: DutyId,
    reason: z.string(),
  }),
});

export const DutyLockedSchema = z.object({
  eventType: z.literal("DutyLocked"),
  payload: z.object({
    dutyId: DutyId,
  }),
});

export const DutyMarkedForRecalculationSchema = z.object({
  eventType: z.literal("DutyMarkedForRecalculation"),
  payload: z.object({
    dutyId: DutyId,
    reason: z.string(),
  }),
});

export const DutyEventSchema = z.discriminatedUnion("eventType", [
  DutyCreatedSchema,
  StaffAssignedToDutySchema,
  StaffUnassignedFromDutySchema,
  WorkGroupAssignedToStaffSchema,
  WorkGroupAssignmentChangedSchema,
  DutyApprovedSchema,
  DutyApprovalRevokedSchema,
  DutyLockedSchema,
  DutyMarkedForRecalculationSchema,
]);

export type DutyEventDTO = z.infer<typeof DutyEventSchema>;

// src/domain/duty/dutyCommandSchema.ts
import { z } from "zod";

export const CreateDutyCommandSchema = z.object({
  type: z.literal("CreateDuty"),
  dutyId: z.string().uuid(),
  teamId: z.number().int(),
  date: z.string(), // ISO date
});

export const AssignStaffToDutyCommandSchema = z.object({
  type: z.literal("AssignStaffToDuty"),
  dutyId: z.string().uuid(),
  staffId: z.number().int(),
});

export const UnassignStaffFromDutyCommandSchema = z.object({
  type: z.literal("UnassignStaffFromDuty"),
  dutyId: z.string().uuid(),
  staffId: z.number().int(),
});

export const AssignWorkGroupToStaffCommandSchema = z.object({
  type: z.literal("AssignWorkGroupToStaff"),
  dutyId: z.string().uuid(),
  staffId: z.number().int(),
  workGroupId: z.number().int(),
});

export const ChangeWorkGroupAssignmentCommandSchema = z.object({
  type: z.literal("ChangeWorkGroupAssignment"),
  dutyId: z.string().uuid(),
  staffId: z.number().int(),
  workGroupId: z.number().int(),
});

export const ApproveDutyCommandSchema = z.object({
  type: z.literal("ApproveDuty"),
  dutyId: z.string().uuid(),
  approvedBy: z.string(),
});

export const RevokeDutyApprovalCommandSchema = z.object({
  type: z.literal("RevokeDutyApproval"),
  dutyId: z.string().uuid(),
  reason: z.string(),
});

export const LockDutyCommandSchema = z.object({
  type: z.literal("LockDuty"),
  dutyId: z.string().uuid(),
});

export const MarkDutyForRecalculationCommandSchema = z.object({
  type: z.literal("MarkDutyForRecalculation"),
  dutyId: z.string().uuid(),
  reason: z.string(),
});

export const DutyCommandSchema = z.discriminatedUnion("type", [
  CreateDutyCommandSchema,
  AssignStaffToDutyCommandSchema,
  UnassignStaffFromDutyCommandSchema,
  AssignWorkGroupToStaffCommandSchema,
  ChangeWorkGroupAssignmentCommandSchema,
  ApproveDutyCommandSchema,
  RevokeDutyApprovalCommandSchema,
  LockDutyCommandSchema,
  MarkDutyForRecalculationCommandSchema,
]);

export type DutyCommandDTO = z.infer<typeof DutyCommandSchema>;

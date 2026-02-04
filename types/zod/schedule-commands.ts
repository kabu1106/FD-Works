import { z } from 'zod'

export const AssignStaffCommandSchema = z.object({
  type: z.literal('ASSIGN_STAFF_TO_WORK_GROUP'),
  commandId: z.string(),
  executedAt: z.string(),
  executedBy: z.object({
    userId: z.string(),
    name: z.string(),
  }),
  date: z.string(),
  staffId: z.number(),
  to: z.object({
    teamId: z.number(),
    workGroupId: z.number(),
  }),
})

export const MoveStaffCommandSchema = z.object({
  type: z.literal('MOVE_STAFF_BETWEEN_WORK_GROUPS'),
  commandId: z.string(),
  executedAt: z.string(),
  executedBy: z.object({
    userId: z.string(),
    name: z.string(),
  }),
  date: z.string(),
  staffId: z.number(),
  from: z.object({
    teamId: z.number(),
    workGroupId: z.number(),
  }),
  to: z.object({
    teamId: z.number(),
    workGroupId: z.number(),
  }),
})

export const ScheduleCommandSchema = z.discriminatedUnion('type', [
  AssignStaffCommandSchema,
  MoveStaffCommandSchema,
])

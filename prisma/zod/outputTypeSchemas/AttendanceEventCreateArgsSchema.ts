import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventIncludeSchema } from '../inputTypeSchemas/AttendanceEventIncludeSchema'
import { AttendanceEventCreateInputSchema } from '../inputTypeSchemas/AttendanceEventCreateInputSchema'
import { AttendanceEventUncheckedCreateInputSchema } from '../inputTypeSchemas/AttendanceEventUncheckedCreateInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttendanceEventSelectSchema: z.ZodType<Prisma.AttendanceEventSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  type: z.boolean().optional(),
  occurredAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const AttendanceEventCreateArgsSchema: z.ZodType<Prisma.AttendanceEventCreateArgs> = z.object({
  select: AttendanceEventSelectSchema.optional(),
  include: z.lazy(() => AttendanceEventIncludeSchema).optional(),
  data: z.union([ AttendanceEventCreateInputSchema, AttendanceEventUncheckedCreateInputSchema ]),
}).strict();

export default AttendanceEventCreateArgsSchema;

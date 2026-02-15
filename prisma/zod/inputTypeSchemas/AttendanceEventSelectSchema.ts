import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

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

export default AttendanceEventSelectSchema;

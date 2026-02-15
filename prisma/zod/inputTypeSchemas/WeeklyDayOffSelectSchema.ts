import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

export const WeeklyDayOffSelectSchema: z.ZodType<Prisma.WeeklyDayOffSelect> = z.object({
  id: z.boolean().optional(),
  staffId: z.boolean().optional(),
  date: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export default WeeklyDayOffSelectSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"

export const WorkShiftDaySelectSchema: z.ZodType<Prisma.WorkShiftDaySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  workShiftId: z.boolean().optional(),
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
}).strict()

export default WorkShiftDaySelectSchema;

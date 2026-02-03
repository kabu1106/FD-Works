import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayCreateManyInputSchema } from '../inputTypeSchemas/WorkShiftDayCreateManyInputSchema'

export const WorkShiftDayCreateManyArgsSchema: z.ZodType<Prisma.WorkShiftDayCreateManyArgs> = z.object({
  data: z.union([ WorkShiftDayCreateManyInputSchema, WorkShiftDayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkShiftDayCreateManyArgsSchema;

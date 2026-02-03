import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayCreateManyInputSchema } from '../inputTypeSchemas/WorkShiftDayCreateManyInputSchema'

export const WorkShiftDayCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WorkShiftDayCreateManyAndReturnArgs> = z.object({
  data: z.union([ WorkShiftDayCreateManyInputSchema, WorkShiftDayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default WorkShiftDayCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayWhereInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereInputSchema'

export const WorkShiftDayDeleteManyArgsSchema: z.ZodType<Prisma.WorkShiftDayDeleteManyArgs> = z.object({
  where: WorkShiftDayWhereInputSchema.optional(), 
}).strict();

export default WorkShiftDayDeleteManyArgsSchema;

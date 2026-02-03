import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftWhereInputSchema } from '../inputTypeSchemas/WorkShiftWhereInputSchema'

export const WorkShiftDeleteManyArgsSchema: z.ZodType<Prisma.WorkShiftDeleteManyArgs> = z.object({
  where: WorkShiftWhereInputSchema.optional(), 
}).strict();

export default WorkShiftDeleteManyArgsSchema;

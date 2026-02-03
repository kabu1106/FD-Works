import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkShiftDayUpdateManyMutationInputSchema'
import { WorkShiftDayUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkShiftDayUncheckedUpdateManyInputSchema'
import { WorkShiftDayWhereInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereInputSchema'

export const WorkShiftDayUpdateManyArgsSchema: z.ZodType<Prisma.WorkShiftDayUpdateManyArgs> = z.object({
  data: z.union([ WorkShiftDayUpdateManyMutationInputSchema, WorkShiftDayUncheckedUpdateManyInputSchema ]),
  where: WorkShiftDayWhereInputSchema.optional(), 
}).strict();

export default WorkShiftDayUpdateManyArgsSchema;

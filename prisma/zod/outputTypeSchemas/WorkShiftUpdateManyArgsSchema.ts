import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkShiftUpdateManyMutationInputSchema'
import { WorkShiftUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkShiftUncheckedUpdateManyInputSchema'
import { WorkShiftWhereInputSchema } from '../inputTypeSchemas/WorkShiftWhereInputSchema'

export const WorkShiftUpdateManyArgsSchema: z.ZodType<Prisma.WorkShiftUpdateManyArgs> = z.object({
  data: z.union([ WorkShiftUpdateManyMutationInputSchema, WorkShiftUncheckedUpdateManyInputSchema ]),
  where: WorkShiftWhereInputSchema.optional(), 
}).strict();

export default WorkShiftUpdateManyArgsSchema;

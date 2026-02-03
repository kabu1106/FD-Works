import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkGroupUpdateManyMutationInputSchema'
import { WorkGroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkGroupUncheckedUpdateManyInputSchema'
import { WorkGroupWhereInputSchema } from '../inputTypeSchemas/WorkGroupWhereInputSchema'

export const WorkGroupUpdateManyArgsSchema: z.ZodType<Prisma.WorkGroupUpdateManyArgs> = z.object({
  data: z.union([ WorkGroupUpdateManyMutationInputSchema, WorkGroupUncheckedUpdateManyInputSchema ]),
  where: WorkGroupWhereInputSchema.optional(), 
}).strict();

export default WorkGroupUpdateManyArgsSchema;

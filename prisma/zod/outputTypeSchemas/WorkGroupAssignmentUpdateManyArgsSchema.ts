import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUpdateManyMutationInputSchema'
import { WorkGroupAssignmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUncheckedUpdateManyInputSchema'
import { WorkGroupAssignmentWhereInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereInputSchema'

export const WorkGroupAssignmentUpdateManyArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateManyArgs> = z.object({
  data: z.union([ WorkGroupAssignmentUpdateManyMutationInputSchema, WorkGroupAssignmentUncheckedUpdateManyInputSchema ]),
  where: WorkGroupAssignmentWhereInputSchema.optional(), 
}).strict();

export default WorkGroupAssignmentUpdateManyArgsSchema;

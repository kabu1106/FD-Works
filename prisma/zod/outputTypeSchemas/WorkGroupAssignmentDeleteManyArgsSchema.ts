import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentWhereInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereInputSchema'

export const WorkGroupAssignmentDeleteManyArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentDeleteManyArgs> = z.object({
  where: WorkGroupAssignmentWhereInputSchema.optional(), 
}).strict();

export default WorkGroupAssignmentDeleteManyArgsSchema;

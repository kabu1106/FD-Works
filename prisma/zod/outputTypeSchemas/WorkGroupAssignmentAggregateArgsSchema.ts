import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentWhereInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereInputSchema'
import { WorkGroupAssignmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentOrderByWithRelationInputSchema'
import { WorkGroupAssignmentWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereUniqueInputSchema'

export const WorkGroupAssignmentAggregateArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentAggregateArgs> = z.object({
  where: WorkGroupAssignmentWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupAssignmentOrderByWithRelationInputSchema.array(), WorkGroupAssignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkGroupAssignmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkGroupAssignmentAggregateArgsSchema;

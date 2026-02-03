import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentWhereInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereInputSchema'
import { WorkGroupAssignmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentOrderByWithAggregationInputSchema'
import { WorkGroupAssignmentScalarFieldEnumSchema } from '../inputTypeSchemas/WorkGroupAssignmentScalarFieldEnumSchema'
import { WorkGroupAssignmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentScalarWhereWithAggregatesInputSchema'

export const WorkGroupAssignmentGroupByArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentGroupByArgs> = z.object({
  where: WorkGroupAssignmentWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupAssignmentOrderByWithAggregationInputSchema.array(), WorkGroupAssignmentOrderByWithAggregationInputSchema ]).optional(),
  by: WorkGroupAssignmentScalarFieldEnumSchema.array(), 
  having: WorkGroupAssignmentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WorkGroupAssignmentGroupByArgsSchema;

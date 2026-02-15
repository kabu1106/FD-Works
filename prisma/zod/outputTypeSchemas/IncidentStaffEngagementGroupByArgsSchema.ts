import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementWhereInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereInputSchema'
import { IncidentStaffEngagementOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementOrderByWithAggregationInputSchema'
import { IncidentStaffEngagementScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentStaffEngagementScalarFieldEnumSchema'
import { IncidentStaffEngagementScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementScalarWhereWithAggregatesInputSchema'

export const IncidentStaffEngagementGroupByArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementGroupByArgs> = z.object({
  where: IncidentStaffEngagementWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffEngagementOrderByWithAggregationInputSchema.array(), IncidentStaffEngagementOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentStaffEngagementScalarFieldEnumSchema.array(), 
  having: IncidentStaffEngagementScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffEngagementGroupByArgsSchema;

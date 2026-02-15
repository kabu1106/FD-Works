import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffEngagementWhereInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereInputSchema'
import { IncidentStaffEngagementOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementOrderByWithRelationInputSchema'
import { IncidentStaffEngagementWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffEngagementWhereUniqueInputSchema'

export const IncidentStaffEngagementAggregateArgsSchema: z.ZodType<Prisma.IncidentStaffEngagementAggregateArgs> = z.object({
  where: IncidentStaffEngagementWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffEngagementOrderByWithRelationInputSchema.array(), IncidentStaffEngagementOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentStaffEngagementWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffEngagementAggregateArgsSchema;

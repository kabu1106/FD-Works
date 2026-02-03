import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffWhereInputSchema } from '../inputTypeSchemas/IncidentStaffWhereInputSchema'
import { IncidentStaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentStaffOrderByWithRelationInputSchema'
import { IncidentStaffWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffWhereUniqueInputSchema'

export const IncidentStaffAggregateArgsSchema: z.ZodType<Prisma.IncidentStaffAggregateArgs> = z.object({
  where: IncidentStaffWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffOrderByWithRelationInputSchema.array(), IncidentStaffOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentStaffWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffAggregateArgsSchema;

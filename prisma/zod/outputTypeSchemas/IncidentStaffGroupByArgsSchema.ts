import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffWhereInputSchema } from '../inputTypeSchemas/IncidentStaffWhereInputSchema'
import { IncidentStaffOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentStaffOrderByWithAggregationInputSchema'
import { IncidentStaffScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentStaffScalarFieldEnumSchema'
import { IncidentStaffScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentStaffScalarWhereWithAggregatesInputSchema'

export const IncidentStaffGroupByArgsSchema: z.ZodType<Prisma.IncidentStaffGroupByArgs> = z.object({
  where: IncidentStaffWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffOrderByWithAggregationInputSchema.array(), IncidentStaffOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentStaffScalarFieldEnumSchema.array(), 
  having: IncidentStaffScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffGroupByArgsSchema;

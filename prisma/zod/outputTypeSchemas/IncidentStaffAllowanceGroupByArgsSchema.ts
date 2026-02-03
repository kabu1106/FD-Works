import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceWhereInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereInputSchema'
import { IncidentStaffAllowanceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceOrderByWithAggregationInputSchema'
import { IncidentStaffAllowanceScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentStaffAllowanceScalarFieldEnumSchema'
import { IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema'

export const IncidentStaffAllowanceGroupByArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceGroupByArgs> = z.object({
  where: IncidentStaffAllowanceWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffAllowanceOrderByWithAggregationInputSchema.array(), IncidentStaffAllowanceOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentStaffAllowanceScalarFieldEnumSchema.array(), 
  having: IncidentStaffAllowanceScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffAllowanceGroupByArgsSchema;

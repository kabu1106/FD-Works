import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentStaffAllowanceWhereInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereInputSchema'
import { IncidentStaffAllowanceOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceOrderByWithRelationInputSchema'
import { IncidentStaffAllowanceWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentStaffAllowanceWhereUniqueInputSchema'

export const IncidentStaffAllowanceAggregateArgsSchema: z.ZodType<Prisma.IncidentStaffAllowanceAggregateArgs> = z.object({
  where: IncidentStaffAllowanceWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentStaffAllowanceOrderByWithRelationInputSchema.array(), IncidentStaffAllowanceOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentStaffAllowanceWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentStaffAllowanceAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'
import { StaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffOrderByWithRelationInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffAggregateArgsSchema: z.ZodType<Prisma.StaffAggregateArgs> = z.object({
  where: StaffWhereInputSchema.optional(), 
  orderBy: z.union([ StaffOrderByWithRelationInputSchema.array(), StaffOrderByWithRelationInputSchema ]).optional(),
  cursor: StaffWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default StaffAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyWhereInputSchema } from '../inputTypeSchemas/DutyWhereInputSchema'
import { DutyOrderByWithRelationInputSchema } from '../inputTypeSchemas/DutyOrderByWithRelationInputSchema'
import { DutyWhereUniqueInputSchema } from '../inputTypeSchemas/DutyWhereUniqueInputSchema'

export const DutyAggregateArgsSchema: z.ZodType<Prisma.DutyAggregateArgs> = z.object({
  where: DutyWhereInputSchema.optional(), 
  orderBy: z.union([ DutyOrderByWithRelationInputSchema.array(), DutyOrderByWithRelationInputSchema ]).optional(),
  cursor: DutyWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DutyAggregateArgsSchema;

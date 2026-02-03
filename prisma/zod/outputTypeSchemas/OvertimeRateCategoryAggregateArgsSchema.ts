import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryWhereInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereInputSchema'
import { OvertimeRateCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryOrderByWithRelationInputSchema'
import { OvertimeRateCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereUniqueInputSchema'

export const OvertimeRateCategoryAggregateArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryAggregateArgs> = z.object({
  where: OvertimeRateCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeRateCategoryOrderByWithRelationInputSchema.array(), OvertimeRateCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeRateCategoryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeRateCategoryAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryWhereInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereInputSchema'
import { OvertimeRateCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryOrderByWithAggregationInputSchema'
import { OvertimeRateCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeRateCategoryScalarFieldEnumSchema'
import { OvertimeRateCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryScalarWhereWithAggregatesInputSchema'

export const OvertimeRateCategoryGroupByArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryGroupByArgs> = z.object({
  where: OvertimeRateCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeRateCategoryOrderByWithAggregationInputSchema.array(), OvertimeRateCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: OvertimeRateCategoryScalarFieldEnumSchema.array(), 
  having: OvertimeRateCategoryScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default OvertimeRateCategoryGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereInputSchema } from '../inputTypeSchemas/HolidayWhereInputSchema'
import { HolidayOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HolidayOrderByWithAggregationInputSchema'
import { HolidayScalarFieldEnumSchema } from '../inputTypeSchemas/HolidayScalarFieldEnumSchema'
import { HolidayScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HolidayScalarWhereWithAggregatesInputSchema'

export const HolidayGroupByArgsSchema: z.ZodType<Prisma.HolidayGroupByArgs> = z.object({
  where: HolidayWhereInputSchema.optional(), 
  orderBy: z.union([ HolidayOrderByWithAggregationInputSchema.array(), HolidayOrderByWithAggregationInputSchema ]).optional(),
  by: HolidayScalarFieldEnumSchema.array(), 
  having: HolidayScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HolidayGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffWhereInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereInputSchema'
import { WeeklyDayOffOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WeeklyDayOffOrderByWithAggregationInputSchema'
import { WeeklyDayOffScalarFieldEnumSchema } from '../inputTypeSchemas/WeeklyDayOffScalarFieldEnumSchema'
import { WeeklyDayOffScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WeeklyDayOffScalarWhereWithAggregatesInputSchema'

export const WeeklyDayOffGroupByArgsSchema: z.ZodType<Prisma.WeeklyDayOffGroupByArgs> = z.object({
  where: WeeklyDayOffWhereInputSchema.optional(), 
  orderBy: z.union([ WeeklyDayOffOrderByWithAggregationInputSchema.array(), WeeklyDayOffOrderByWithAggregationInputSchema ]).optional(),
  by: WeeklyDayOffScalarFieldEnumSchema.array(), 
  having: WeeklyDayOffScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WeeklyDayOffGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffWhereInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereInputSchema'
import { WeeklyDayOffOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeeklyDayOffOrderByWithRelationInputSchema'
import { WeeklyDayOffWhereUniqueInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereUniqueInputSchema'

export const WeeklyDayOffAggregateArgsSchema: z.ZodType<Prisma.WeeklyDayOffAggregateArgs> = z.object({
  where: WeeklyDayOffWhereInputSchema.optional(), 
  orderBy: z.union([ WeeklyDayOffOrderByWithRelationInputSchema.array(), WeeklyDayOffOrderByWithRelationInputSchema ]).optional(),
  cursor: WeeklyDayOffWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default WeeklyDayOffAggregateArgsSchema;

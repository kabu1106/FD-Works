import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereInputSchema } from '../inputTypeSchemas/HolidayWhereInputSchema'
import { HolidayOrderByWithRelationInputSchema } from '../inputTypeSchemas/HolidayOrderByWithRelationInputSchema'
import { HolidayWhereUniqueInputSchema } from '../inputTypeSchemas/HolidayWhereUniqueInputSchema'

export const HolidayAggregateArgsSchema: z.ZodType<Prisma.HolidayAggregateArgs> = z.object({
  where: HolidayWhereInputSchema.optional(), 
  orderBy: z.union([ HolidayOrderByWithRelationInputSchema.array(), HolidayOrderByWithRelationInputSchema ]).optional(),
  cursor: HolidayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HolidayAggregateArgsSchema;

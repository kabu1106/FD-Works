import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayWhereInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereInputSchema'
import { SubstituteHolidayOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubstituteHolidayOrderByWithRelationInputSchema'
import { SubstituteHolidayWhereUniqueInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereUniqueInputSchema'

export const SubstituteHolidayAggregateArgsSchema: z.ZodType<Prisma.SubstituteHolidayAggregateArgs> = z.object({
  where: SubstituteHolidayWhereInputSchema.optional(), 
  orderBy: z.union([ SubstituteHolidayOrderByWithRelationInputSchema.array(), SubstituteHolidayOrderByWithRelationInputSchema ]).optional(),
  cursor: SubstituteHolidayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SubstituteHolidayAggregateArgsSchema;

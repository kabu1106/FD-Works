import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayWhereInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereInputSchema'
import { SubstituteHolidayOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubstituteHolidayOrderByWithAggregationInputSchema'
import { SubstituteHolidayScalarFieldEnumSchema } from '../inputTypeSchemas/SubstituteHolidayScalarFieldEnumSchema'
import { SubstituteHolidayScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubstituteHolidayScalarWhereWithAggregatesInputSchema'

export const SubstituteHolidayGroupByArgsSchema: z.ZodType<Prisma.SubstituteHolidayGroupByArgs> = z.object({
  where: SubstituteHolidayWhereInputSchema.optional(), 
  orderBy: z.union([ SubstituteHolidayOrderByWithAggregationInputSchema.array(), SubstituteHolidayOrderByWithAggregationInputSchema ]).optional(),
  by: SubstituteHolidayScalarFieldEnumSchema.array(), 
  having: SubstituteHolidayScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default SubstituteHolidayGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventWhereInputSchema } from '../inputTypeSchemas/AttendanceEventWhereInputSchema'
import { AttendanceEventOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AttendanceEventOrderByWithAggregationInputSchema'
import { AttendanceEventScalarFieldEnumSchema } from '../inputTypeSchemas/AttendanceEventScalarFieldEnumSchema'
import { AttendanceEventScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AttendanceEventScalarWhereWithAggregatesInputSchema'

export const AttendanceEventGroupByArgsSchema: z.ZodType<Prisma.AttendanceEventGroupByArgs> = z.object({
  where: AttendanceEventWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceEventOrderByWithAggregationInputSchema.array(), AttendanceEventOrderByWithAggregationInputSchema ]).optional(),
  by: AttendanceEventScalarFieldEnumSchema.array(), 
  having: AttendanceEventScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AttendanceEventGroupByArgsSchema;

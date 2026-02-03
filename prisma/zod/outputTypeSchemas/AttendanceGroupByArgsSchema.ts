import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceWhereInputSchema } from '../inputTypeSchemas/AttendanceWhereInputSchema'
import { AttendanceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AttendanceOrderByWithAggregationInputSchema'
import { AttendanceScalarFieldEnumSchema } from '../inputTypeSchemas/AttendanceScalarFieldEnumSchema'
import { AttendanceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AttendanceScalarWhereWithAggregatesInputSchema'

export const AttendanceGroupByArgsSchema: z.ZodType<Prisma.AttendanceGroupByArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceOrderByWithAggregationInputSchema.array(), AttendanceOrderByWithAggregationInputSchema ]).optional(),
  by: AttendanceScalarFieldEnumSchema.array(), 
  having: AttendanceScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AttendanceGroupByArgsSchema;

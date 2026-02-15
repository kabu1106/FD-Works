import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventWhereInputSchema } from '../inputTypeSchemas/AttendanceEventWhereInputSchema'
import { AttendanceEventOrderByWithRelationInputSchema } from '../inputTypeSchemas/AttendanceEventOrderByWithRelationInputSchema'
import { AttendanceEventWhereUniqueInputSchema } from '../inputTypeSchemas/AttendanceEventWhereUniqueInputSchema'

export const AttendanceEventAggregateArgsSchema: z.ZodType<Prisma.AttendanceEventAggregateArgs> = z.object({
  where: AttendanceEventWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceEventOrderByWithRelationInputSchema.array(), AttendanceEventOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceEventWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AttendanceEventAggregateArgsSchema;

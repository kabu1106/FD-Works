import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceWhereInputSchema } from '../inputTypeSchemas/AttendanceWhereInputSchema'
import { AttendanceOrderByWithRelationInputSchema } from '../inputTypeSchemas/AttendanceOrderByWithRelationInputSchema'
import { AttendanceWhereUniqueInputSchema } from '../inputTypeSchemas/AttendanceWhereUniqueInputSchema'

export const AttendanceAggregateArgsSchema: z.ZodType<Prisma.AttendanceAggregateArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(), AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AttendanceAggregateArgsSchema;

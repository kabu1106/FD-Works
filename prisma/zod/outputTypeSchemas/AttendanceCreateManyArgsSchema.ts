import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceCreateManyInputSchema } from '../inputTypeSchemas/AttendanceCreateManyInputSchema'

export const AttendanceCreateManyArgsSchema: z.ZodType<Prisma.AttendanceCreateManyArgs> = z.object({
  data: z.union([ AttendanceCreateManyInputSchema, AttendanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AttendanceCreateManyArgsSchema;

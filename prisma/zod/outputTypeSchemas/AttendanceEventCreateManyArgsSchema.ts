import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventCreateManyInputSchema } from '../inputTypeSchemas/AttendanceEventCreateManyInputSchema'

export const AttendanceEventCreateManyArgsSchema: z.ZodType<Prisma.AttendanceEventCreateManyArgs> = z.object({
  data: z.union([ AttendanceEventCreateManyInputSchema, AttendanceEventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AttendanceEventCreateManyArgsSchema;

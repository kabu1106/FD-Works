import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventCreateManyInputSchema } from '../inputTypeSchemas/AttendanceEventCreateManyInputSchema'

export const AttendanceEventCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AttendanceEventCreateManyAndReturnArgs> = z.object({
  data: z.union([ AttendanceEventCreateManyInputSchema, AttendanceEventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AttendanceEventCreateManyAndReturnArgsSchema;

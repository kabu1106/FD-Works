import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventWhereInputSchema } from '../inputTypeSchemas/AttendanceEventWhereInputSchema'

export const AttendanceEventDeleteManyArgsSchema: z.ZodType<Prisma.AttendanceEventDeleteManyArgs> = z.object({
  where: AttendanceEventWhereInputSchema.optional(), 
}).strict();

export default AttendanceEventDeleteManyArgsSchema;

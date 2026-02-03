import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceWhereInputSchema } from '../inputTypeSchemas/AttendanceWhereInputSchema'

export const AttendanceDeleteManyArgsSchema: z.ZodType<Prisma.AttendanceDeleteManyArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(), 
}).strict();

export default AttendanceDeleteManyArgsSchema;

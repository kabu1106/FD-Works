import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceSelectSchema } from '../inputTypeSchemas/AttendanceSelectSchema';
import { AttendanceIncludeSchema } from '../inputTypeSchemas/AttendanceIncludeSchema';

export const AttendanceArgsSchema: z.ZodType<Prisma.AttendanceDefaultArgs> = z.object({
  select: z.lazy(() => AttendanceSelectSchema).optional(),
  include: z.lazy(() => AttendanceIncludeSchema).optional(),
}).strict();

export default AttendanceArgsSchema;

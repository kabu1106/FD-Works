import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventSelectSchema } from '../inputTypeSchemas/AttendanceEventSelectSchema';
import { AttendanceEventIncludeSchema } from '../inputTypeSchemas/AttendanceEventIncludeSchema';

export const AttendanceEventArgsSchema: z.ZodType<Prisma.AttendanceEventDefaultArgs> = z.object({
  select: z.lazy(() => AttendanceEventSelectSchema).optional(),
  include: z.lazy(() => AttendanceEventIncludeSchema).optional(),
}).strict();

export default AttendanceEventArgsSchema;

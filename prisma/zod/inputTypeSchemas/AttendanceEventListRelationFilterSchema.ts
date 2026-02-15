import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventWhereInputSchema } from './AttendanceEventWhereInputSchema';

export const AttendanceEventListRelationFilterSchema: z.ZodType<Prisma.AttendanceEventListRelationFilter> = z.strictObject({
  every: z.lazy(() => AttendanceEventWhereInputSchema).optional(),
  some: z.lazy(() => AttendanceEventWhereInputSchema).optional(),
  none: z.lazy(() => AttendanceEventWhereInputSchema).optional(),
});

export default AttendanceEventListRelationFilterSchema;

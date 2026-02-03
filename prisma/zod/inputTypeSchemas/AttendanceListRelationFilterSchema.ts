import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereInputSchema } from './AttendanceWhereInputSchema';

export const AttendanceListRelationFilterSchema: z.ZodType<Prisma.AttendanceListRelationFilter> = z.strictObject({
  every: z.lazy(() => AttendanceWhereInputSchema).optional(),
  some: z.lazy(() => AttendanceWhereInputSchema).optional(),
  none: z.lazy(() => AttendanceWhereInputSchema).optional(),
});

export default AttendanceListRelationFilterSchema;

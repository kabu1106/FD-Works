import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';

export const NestedEnumAttendanceTypeFilterSchema: z.ZodType<Prisma.NestedEnumAttendanceTypeFilter> = z.strictObject({
  equals: z.lazy(() => AttendanceTypeSchema).optional(),
  in: z.lazy(() => AttendanceTypeSchema).array().optional(),
  notIn: z.lazy(() => AttendanceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AttendanceTypeSchema), z.lazy(() => NestedEnumAttendanceTypeFilterSchema) ]).optional(),
});

export default NestedEnumAttendanceTypeFilterSchema;

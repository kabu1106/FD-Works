import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { NestedEnumAttendanceEventTypeFilterSchema } from './NestedEnumAttendanceEventTypeFilterSchema';

export const EnumAttendanceEventTypeFilterSchema: z.ZodType<Prisma.EnumAttendanceEventTypeFilter> = z.strictObject({
  equals: z.lazy(() => AttendanceEventTypeSchema).optional(),
  in: z.lazy(() => AttendanceEventTypeSchema).array().optional(),
  notIn: z.lazy(() => AttendanceEventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => NestedEnumAttendanceEventTypeFilterSchema) ]).optional(),
});

export default EnumAttendanceEventTypeFilterSchema;

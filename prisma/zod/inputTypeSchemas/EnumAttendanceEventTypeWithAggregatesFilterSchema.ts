import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { NestedEnumAttendanceEventTypeWithAggregatesFilterSchema } from './NestedEnumAttendanceEventTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAttendanceEventTypeFilterSchema } from './NestedEnumAttendanceEventTypeFilterSchema';

export const EnumAttendanceEventTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAttendanceEventTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AttendanceEventTypeSchema).optional(),
  in: z.lazy(() => AttendanceEventTypeSchema).array().optional(),
  notIn: z.lazy(() => AttendanceEventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => NestedEnumAttendanceEventTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAttendanceEventTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAttendanceEventTypeFilterSchema).optional(),
});

export default EnumAttendanceEventTypeWithAggregatesFilterSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAttendanceTypeFilterSchema } from './NestedEnumAttendanceTypeFilterSchema';

export const NestedEnumAttendanceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAttendanceTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AttendanceTypeSchema).optional(),
  in: z.lazy(() => AttendanceTypeSchema).array().optional(),
  notIn: z.lazy(() => AttendanceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AttendanceTypeSchema), z.lazy(() => NestedEnumAttendanceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAttendanceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAttendanceTypeFilterSchema).optional(),
});

export default NestedEnumAttendanceTypeWithAggregatesFilterSchema;

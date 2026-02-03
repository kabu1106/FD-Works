import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';
import { NestedEnumAttendanceTypeWithAggregatesFilterSchema } from './NestedEnumAttendanceTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAttendanceTypeFilterSchema } from './NestedEnumAttendanceTypeFilterSchema';

export const EnumAttendanceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAttendanceTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AttendanceTypeSchema).optional(),
  in: z.lazy(() => AttendanceTypeSchema).array().optional(),
  notIn: z.lazy(() => AttendanceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AttendanceTypeSchema), z.lazy(() => NestedEnumAttendanceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAttendanceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAttendanceTypeFilterSchema).optional(),
});

export default EnumAttendanceTypeWithAggregatesFilterSchema;

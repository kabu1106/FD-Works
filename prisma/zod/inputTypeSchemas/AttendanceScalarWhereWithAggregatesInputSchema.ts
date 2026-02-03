import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumAttendanceTypeWithAggregatesFilterSchema } from './EnumAttendanceTypeWithAggregatesFilterSchema';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AttendanceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AttendanceScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema), z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema), z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceTypeWithAggregatesFilterSchema), z.lazy(() => AttendanceTypeSchema) ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default AttendanceScalarWhereWithAggregatesInputSchema;

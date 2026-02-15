import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumAttendanceEventTypeWithAggregatesFilterSchema } from './EnumAttendanceEventTypeWithAggregatesFilterSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AttendanceEventScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AttendanceEventScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceEventScalarWhereWithAggregatesInputSchema), z.lazy(() => AttendanceEventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceEventScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceEventScalarWhereWithAggregatesInputSchema), z.lazy(() => AttendanceEventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceEventTypeWithAggregatesFilterSchema), z.lazy(() => AttendanceEventTypeSchema) ]).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default AttendanceEventScalarWhereWithAggregatesInputSchema;

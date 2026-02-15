import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumAttendanceEventTypeFilterSchema } from './EnumAttendanceEventTypeFilterSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AttendanceEventScalarWhereInputSchema: z.ZodType<Prisma.AttendanceEventScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceEventScalarWhereInputSchema), z.lazy(() => AttendanceEventScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceEventScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceEventScalarWhereInputSchema), z.lazy(() => AttendanceEventScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceEventTypeFilterSchema), z.lazy(() => AttendanceEventTypeSchema) ]).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default AttendanceEventScalarWhereInputSchema;

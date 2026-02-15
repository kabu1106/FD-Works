import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumAttendanceEventTypeFilterSchema } from './EnumAttendanceEventTypeFilterSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AttendanceScalarWhereInputSchema: z.ZodType<Prisma.AttendanceScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema), z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema), z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceEventTypeFilterSchema), z.lazy(() => AttendanceEventTypeSchema) ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default AttendanceScalarWhereInputSchema;

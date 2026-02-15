import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumAttendanceEventTypeFilterSchema } from './EnumAttendanceEventTypeFilterSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const AttendanceEventWhereInputSchema: z.ZodType<Prisma.AttendanceEventWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceEventWhereInputSchema), z.lazy(() => AttendanceEventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceEventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceEventWhereInputSchema), z.lazy(() => AttendanceEventWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceEventTypeFilterSchema), z.lazy(() => AttendanceEventTypeSchema) ]).optional(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default AttendanceEventWhereInputSchema;

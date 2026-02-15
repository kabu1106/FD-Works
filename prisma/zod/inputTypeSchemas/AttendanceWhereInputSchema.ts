import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumAttendanceEventTypeFilterSchema } from './EnumAttendanceEventTypeFilterSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DepartmentRelationFilterSchema } from './DepartmentRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const AttendanceWhereInputSchema: z.ZodType<Prisma.AttendanceWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema), z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema), z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceEventTypeFilterSchema), z.lazy(() => AttendanceEventTypeSchema) ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default AttendanceWhereInputSchema;

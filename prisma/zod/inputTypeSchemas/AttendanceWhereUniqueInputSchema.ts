import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceWhereInputSchema } from './AttendanceWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumAttendanceTypeFilterSchema } from './EnumAttendanceTypeFilterSchema';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DepartmentRelationFilterSchema } from './DepartmentRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const AttendanceWhereUniqueInputSchema: z.ZodType<Prisma.AttendanceWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema), z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema), z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  departmentId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => EnumAttendanceTypeFilterSchema), z.lazy(() => AttendanceTypeSchema) ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
}));

export default AttendanceWhereUniqueInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DutyCreateNestedOneWithoutAttendanceInputSchema } from './DutyCreateNestedOneWithoutAttendanceInputSchema';
import { DepartmentCreateNestedOneWithoutAttendanceInputSchema } from './DepartmentCreateNestedOneWithoutAttendanceInputSchema';
import { StaffCreateNestedOneWithoutAttendanceInputSchema } from './StaffCreateNestedOneWithoutAttendanceInputSchema';

export const AttendanceCreateInputSchema: z.ZodType<Prisma.AttendanceCreateInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutAttendanceInputSchema),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutAttendanceInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutAttendanceInputSchema),
});

export default AttendanceCreateInputSchema;

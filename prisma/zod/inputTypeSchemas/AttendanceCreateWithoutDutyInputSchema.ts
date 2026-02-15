import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DepartmentCreateNestedOneWithoutAttendanceInputSchema } from './DepartmentCreateNestedOneWithoutAttendanceInputSchema';
import { StaffCreateNestedOneWithoutAttendanceInputSchema } from './StaffCreateNestedOneWithoutAttendanceInputSchema';

export const AttendanceCreateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutAttendanceInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutAttendanceInputSchema),
});

export default AttendanceCreateWithoutDutyInputSchema;

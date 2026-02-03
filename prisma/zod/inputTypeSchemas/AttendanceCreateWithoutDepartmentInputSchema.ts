import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';
import { DutyCreateNestedOneWithoutAttendanceInputSchema } from './DutyCreateNestedOneWithoutAttendanceInputSchema';
import { StaffCreateNestedOneWithoutAttendanceInputSchema } from './StaffCreateNestedOneWithoutAttendanceInputSchema';

export const AttendanceCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutDepartmentInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutAttendanceInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutAttendanceInputSchema),
});

export default AttendanceCreateWithoutDepartmentInputSchema;

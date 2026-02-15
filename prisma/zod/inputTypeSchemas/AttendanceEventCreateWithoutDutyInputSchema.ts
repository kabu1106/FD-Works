import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { StaffCreateNestedOneWithoutAttendanceEventsInputSchema } from './StaffCreateNestedOneWithoutAttendanceEventsInputSchema';

export const AttendanceEventCreateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutAttendanceEventsInputSchema),
});

export default AttendanceEventCreateWithoutDutyInputSchema;

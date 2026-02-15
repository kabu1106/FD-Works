import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DutyCreateNestedOneWithoutAttendanceEventsInputSchema } from './DutyCreateNestedOneWithoutAttendanceEventsInputSchema';

export const AttendanceEventCreateWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutAttendanceEventsInputSchema),
});

export default AttendanceEventCreateWithoutStaffInputSchema;

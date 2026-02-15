import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { DutyCreateNestedOneWithoutAttendanceEventsInputSchema } from './DutyCreateNestedOneWithoutAttendanceEventsInputSchema';
import { StaffCreateNestedOneWithoutAttendanceEventsInputSchema } from './StaffCreateNestedOneWithoutAttendanceEventsInputSchema';

export const AttendanceEventCreateInputSchema: z.ZodType<Prisma.AttendanceEventCreateInput> = z.strictObject({
  id: z.string().optional(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  duty: z.lazy(() => DutyCreateNestedOneWithoutAttendanceEventsInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutAttendanceEventsInputSchema),
});

export default AttendanceEventCreateInputSchema;

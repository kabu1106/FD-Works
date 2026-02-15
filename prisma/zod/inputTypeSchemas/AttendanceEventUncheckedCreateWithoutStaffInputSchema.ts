import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceEventUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default AttendanceEventUncheckedCreateWithoutStaffInputSchema;

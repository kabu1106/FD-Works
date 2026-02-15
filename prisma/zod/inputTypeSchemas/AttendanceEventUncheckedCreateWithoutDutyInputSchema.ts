import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceEventUncheckedCreateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default AttendanceEventUncheckedCreateWithoutDutyInputSchema;

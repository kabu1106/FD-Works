import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceEventUncheckedCreateInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default AttendanceEventUncheckedCreateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceEventCreateManyStaffInputSchema: z.ZodType<Prisma.AttendanceEventCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default AttendanceEventCreateManyStaffInputSchema;

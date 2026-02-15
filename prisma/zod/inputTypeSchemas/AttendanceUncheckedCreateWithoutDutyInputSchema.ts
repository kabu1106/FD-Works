import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceUncheckedCreateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutDutyInput> = z.strictObject({
  id: z.string().optional(),
  departmentId: z.number().int(),
  staffId: z.number().int(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default AttendanceUncheckedCreateWithoutDutyInputSchema;

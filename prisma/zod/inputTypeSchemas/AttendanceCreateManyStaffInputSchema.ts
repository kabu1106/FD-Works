import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const AttendanceCreateManyStaffInputSchema: z.ZodType<Prisma.AttendanceCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  departmentId: z.number().int(),
  type: z.lazy(() => AttendanceEventTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default AttendanceCreateManyStaffInputSchema;

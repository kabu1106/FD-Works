import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';

export const AttendanceUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  departmentId: z.number().int(),
  type: z.lazy(() => AttendanceTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default AttendanceUncheckedCreateWithoutStaffInputSchema;

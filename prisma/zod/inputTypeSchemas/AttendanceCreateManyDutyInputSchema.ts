import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';

export const AttendanceCreateManyDutyInputSchema: z.ZodType<Prisma.AttendanceCreateManyDutyInput> = z.strictObject({
  id: z.string().optional(),
  departmentId: z.number().int(),
  staffId: z.number().int(),
  type: z.lazy(() => AttendanceTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default AttendanceCreateManyDutyInputSchema;

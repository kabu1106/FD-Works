import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';

export const AttendanceCreateManyInputSchema: z.ZodType<Prisma.AttendanceCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  departmentId: z.number().int(),
  staffId: z.number().int(),
  type: z.lazy(() => AttendanceTypeSchema),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default AttendanceCreateManyInputSchema;

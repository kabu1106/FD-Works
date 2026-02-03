import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceTypeSchema } from './AttendanceTypeSchema';

export const EnumAttendanceTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAttendanceTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AttendanceTypeSchema).optional(),
});

export default EnumAttendanceTypeFieldUpdateOperationsInputSchema;

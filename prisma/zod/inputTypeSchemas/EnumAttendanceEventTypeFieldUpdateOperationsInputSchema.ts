import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';

export const EnumAttendanceEventTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAttendanceEventTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AttendanceEventTypeSchema).optional(),
});

export default EnumAttendanceEventTypeFieldUpdateOperationsInputSchema;

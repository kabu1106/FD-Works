import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { EnumAttendanceEventTypeFieldUpdateOperationsInputSchema } from './EnumAttendanceEventTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const AttendanceEventUncheckedUpdateManyWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUncheckedUpdateManyWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dutyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => EnumAttendanceEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  occurredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export default AttendanceEventUncheckedUpdateManyWithoutStaffInputSchema;

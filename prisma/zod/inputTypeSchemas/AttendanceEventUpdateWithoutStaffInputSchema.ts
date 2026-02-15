import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { EnumAttendanceEventTypeFieldUpdateOperationsInputSchema } from './EnumAttendanceEventTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema } from './DutyUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema';

export const AttendanceEventUpdateWithoutStaffInputSchema: z.ZodType<Prisma.AttendanceEventUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => EnumAttendanceEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  occurredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema).optional(),
});

export default AttendanceEventUpdateWithoutStaffInputSchema;

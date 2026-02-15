import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { EnumAttendanceEventTypeFieldUpdateOperationsInputSchema } from './EnumAttendanceEventTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StaffUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema } from './StaffUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema';

export const AttendanceEventUpdateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceEventUpdateWithoutDutyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => EnumAttendanceEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  occurredAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutAttendanceEventsNestedInputSchema).optional(),
});

export default AttendanceEventUpdateWithoutDutyInputSchema;

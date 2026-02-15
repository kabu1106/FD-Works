import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { EnumAttendanceEventTypeFieldUpdateOperationsInputSchema } from './EnumAttendanceEventTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema';
import { StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema } from './StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema';

export const AttendanceUpdateWithoutDutyInputSchema: z.ZodType<Prisma.AttendanceUpdateWithoutDutyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => EnumAttendanceEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
});

export default AttendanceUpdateWithoutDutyInputSchema;

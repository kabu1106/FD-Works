import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AttendanceEventTypeSchema } from './AttendanceEventTypeSchema';
import { EnumAttendanceEventTypeFieldUpdateOperationsInputSchema } from './EnumAttendanceEventTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutAttendanceNestedInputSchema } from './DutyUpdateOneRequiredWithoutAttendanceNestedInputSchema';
import { DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema';
import { StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema } from './StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema';

export const AttendanceUpdateInputSchema: z.ZodType<Prisma.AttendanceUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AttendanceEventTypeSchema), z.lazy(() => EnumAttendanceEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
});

export default AttendanceUpdateInputSchema;

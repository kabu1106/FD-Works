import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema } from './DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema';
import { StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema } from './StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema';
import { SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema } from './SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema';

export const SpecialLeaveAssignmentUpdateInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  baseDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema).optional(),
  specialLeaveType: z.lazy(() => SpecialLeaveTypeUpdateOneRequiredWithoutSpecialLeaveAssignmentsNestedInputSchema).optional(),
});

export default SpecialLeaveAssignmentUpdateInputSchema;

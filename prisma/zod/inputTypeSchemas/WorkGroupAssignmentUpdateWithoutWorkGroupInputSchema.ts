import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema } from './DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema';
import { StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema } from './StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema';

export const WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithoutWorkGroupInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema).optional(),
});

export default WorkGroupAssignmentUpdateWithoutWorkGroupInputSchema;

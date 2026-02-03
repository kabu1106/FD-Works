import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema } from './DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema';
import { WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema } from './WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema';

export const WorkGroupAssignmentUpdateWithoutStaffInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema).optional(),
  workGroup: z.lazy(() => WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema).optional(),
});

export default WorkGroupAssignmentUpdateWithoutStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema } from './WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema';
import { StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema } from './StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema';

export const WorkGroupAssignmentUpdateWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpdateWithoutDutyInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workGroup: z.lazy(() => WorkGroupUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema).optional(),
});

export default WorkGroupAssignmentUpdateWithoutDutyInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupNestedInputSchema } from './WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupNestedInputSchema';

export const WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.WorkGroupUncheckedUpdateWithoutOvertimeSlotsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentUncheckedUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
});

export default WorkGroupUncheckedUpdateWithoutOvertimeSlotsInputSchema;

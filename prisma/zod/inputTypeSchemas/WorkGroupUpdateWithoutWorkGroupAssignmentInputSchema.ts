import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema } from './OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema';

export const WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupUpdateWithoutWorkGroupAssignmentInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
});

export default WorkGroupUpdateWithoutWorkGroupAssignmentInputSchema;

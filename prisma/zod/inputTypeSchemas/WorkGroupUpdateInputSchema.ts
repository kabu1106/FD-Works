import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema } from './OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema';
import { WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema } from './WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema';

export const WorkGroupUpdateInputSchema: z.ZodType<Prisma.WorkGroupUpdateInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
});

export default WorkGroupUpdateInputSchema;

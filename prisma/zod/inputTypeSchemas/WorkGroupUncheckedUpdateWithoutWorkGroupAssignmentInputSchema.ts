import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInputSchema } from './OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInputSchema';

export const WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInputSchema).optional(),
});

export default WorkGroupUncheckedUpdateWithoutWorkGroupAssignmentInputSchema;

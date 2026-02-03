import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInputSchema';

export const SpecialLeaveTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  specialLeaveGroupId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateManyWithoutSpecialLeaveTypeNestedInputSchema).optional(),
});

export default SpecialLeaveTypeUncheckedUpdateInputSchema;

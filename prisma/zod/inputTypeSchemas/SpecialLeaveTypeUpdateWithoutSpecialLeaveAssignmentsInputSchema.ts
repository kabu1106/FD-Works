import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInputSchema } from './SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInputSchema';

export const SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  specialLeaveGroup: z.lazy(() => SpecialLeaveGroupUpdateOneRequiredWithoutSpecialLeaveTypeNestedInputSchema).optional(),
});

export default SpecialLeaveTypeUpdateWithoutSpecialLeaveAssignmentsInputSchema;

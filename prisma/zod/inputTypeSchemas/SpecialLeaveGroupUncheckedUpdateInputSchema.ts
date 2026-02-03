import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInputSchema } from './SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInputSchema';

export const SpecialLeaveGroupUncheckedUpdateInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  SpecialLeaveType: z.lazy(() => SpecialLeaveTypeUncheckedUpdateManyWithoutSpecialLeaveGroupNestedInputSchema).optional(),
});

export default SpecialLeaveGroupUncheckedUpdateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInputSchema } from './AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInputSchema';

export const AllowanceGroupUncheckedUpdateInputSchema: z.ZodType<Prisma.AllowanceGroupUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInputSchema).optional(),
});

export default AllowanceGroupUncheckedUpdateInputSchema;

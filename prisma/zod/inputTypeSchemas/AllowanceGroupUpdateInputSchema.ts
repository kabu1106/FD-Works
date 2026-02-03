import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { AllowanceTypeUpdateManyWithoutAllowanceGroupNestedInputSchema } from './AllowanceTypeUpdateManyWithoutAllowanceGroupNestedInputSchema';

export const AllowanceGroupUpdateInputSchema: z.ZodType<Prisma.AllowanceGroupUpdateInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceTypes: z.lazy(() => AllowanceTypeUpdateManyWithoutAllowanceGroupNestedInputSchema).optional(),
});

export default AllowanceGroupUpdateInputSchema;

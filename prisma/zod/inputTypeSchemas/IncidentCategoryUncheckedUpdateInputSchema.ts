import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentTypeUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './IncidentTypeUncheckedUpdateManyWithoutCategoryNestedInputSchema';
import { IncidentUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './IncidentUncheckedUpdateManyWithoutCategoryNestedInputSchema';

export const IncidentCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.IncidentCategoryUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  types: z.lazy(() => IncidentTypeUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Incident: z.lazy(() => IncidentUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
});

export default IncidentCategoryUncheckedUpdateInputSchema;

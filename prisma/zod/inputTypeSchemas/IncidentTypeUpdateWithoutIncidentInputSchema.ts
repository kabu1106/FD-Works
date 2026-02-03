import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentCategoryUpdateOneRequiredWithoutTypesNestedInputSchema } from './IncidentCategoryUpdateOneRequiredWithoutTypesNestedInputSchema';

export const IncidentTypeUpdateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeUpdateWithoutIncidentInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => IncidentCategoryUpdateOneRequiredWithoutTypesNestedInputSchema).optional(),
});

export default IncidentTypeUpdateWithoutIncidentInputSchema;

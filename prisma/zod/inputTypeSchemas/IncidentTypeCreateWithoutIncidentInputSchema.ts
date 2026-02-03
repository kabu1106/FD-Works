import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateNestedOneWithoutTypesInputSchema } from './IncidentCategoryCreateNestedOneWithoutTypesInputSchema';

export const IncidentTypeCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeCreateWithoutIncidentInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  category: z.lazy(() => IncidentCategoryCreateNestedOneWithoutTypesInputSchema),
});

export default IncidentTypeCreateWithoutIncidentInputSchema;

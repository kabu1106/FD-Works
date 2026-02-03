import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateNestedManyWithoutCategoryInputSchema } from './IncidentTypeCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryCreateWithoutIncidentInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  types: z.lazy(() => IncidentTypeCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryCreateWithoutIncidentInputSchema;

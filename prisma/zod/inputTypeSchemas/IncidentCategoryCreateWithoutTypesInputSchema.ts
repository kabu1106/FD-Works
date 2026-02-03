import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedManyWithoutCategoryInputSchema } from './IncidentCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryCreateWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryCreateWithoutTypesInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  Incident: z.lazy(() => IncidentCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryCreateWithoutTypesInputSchema;

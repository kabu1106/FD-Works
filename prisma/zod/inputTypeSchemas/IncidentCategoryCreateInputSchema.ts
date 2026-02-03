import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateNestedManyWithoutCategoryInputSchema } from './IncidentTypeCreateNestedManyWithoutCategoryInputSchema';
import { IncidentCreateNestedManyWithoutCategoryInputSchema } from './IncidentCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryCreateInputSchema: z.ZodType<Prisma.IncidentCategoryCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  types: z.lazy(() => IncidentTypeCreateNestedManyWithoutCategoryInputSchema).optional(),
  Incident: z.lazy(() => IncidentCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryCreateInputSchema;

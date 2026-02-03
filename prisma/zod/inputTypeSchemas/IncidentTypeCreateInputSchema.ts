import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateNestedOneWithoutTypesInputSchema } from './IncidentCategoryCreateNestedOneWithoutTypesInputSchema';
import { IncidentCreateNestedManyWithoutTypeInputSchema } from './IncidentCreateNestedManyWithoutTypeInputSchema';

export const IncidentTypeCreateInputSchema: z.ZodType<Prisma.IncidentTypeCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  category: z.lazy(() => IncidentCategoryCreateNestedOneWithoutTypesInputSchema),
  Incident: z.lazy(() => IncidentCreateNestedManyWithoutTypeInputSchema).optional(),
});

export default IncidentTypeCreateInputSchema;

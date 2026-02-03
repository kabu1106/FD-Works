import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedManyWithoutTypeInputSchema } from './IncidentCreateNestedManyWithoutTypeInputSchema';

export const IncidentTypeCreateWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeCreateWithoutCategoryInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  Incident: z.lazy(() => IncidentCreateNestedManyWithoutTypeInputSchema).optional(),
});

export default IncidentTypeCreateWithoutCategoryInputSchema;

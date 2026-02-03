import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryUncheckedCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryUncheckedCreateWithoutIncidentInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  types: z.lazy(() => IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryUncheckedCreateWithoutIncidentInputSchema;

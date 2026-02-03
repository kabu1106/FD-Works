import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentUncheckedCreateNestedManyWithoutTypeInputSchema } from './IncidentUncheckedCreateNestedManyWithoutTypeInputSchema';

export const IncidentTypeUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeUncheckedCreateWithoutCategoryInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  Incident: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutTypeInputSchema).optional(),
});

export default IncidentTypeUncheckedCreateWithoutCategoryInputSchema;

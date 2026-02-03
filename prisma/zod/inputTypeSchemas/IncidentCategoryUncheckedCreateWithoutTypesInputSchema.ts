import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema } from './IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryUncheckedCreateWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryUncheckedCreateWithoutTypesInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  Incident: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryUncheckedCreateWithoutTypesInputSchema;

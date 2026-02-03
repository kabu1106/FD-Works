import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema';
import { IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema } from './IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const IncidentCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentCategoryUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  types: z.lazy(() => IncidentTypeUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
  Incident: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default IncidentCategoryUncheckedCreateInputSchema;

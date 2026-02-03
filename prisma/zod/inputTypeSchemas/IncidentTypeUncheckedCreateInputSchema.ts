import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentUncheckedCreateNestedManyWithoutTypeInputSchema } from './IncidentUncheckedCreateNestedManyWithoutTypeInputSchema';

export const IncidentTypeUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentTypeUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  categoryId: z.number().int(),
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  Incident: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutTypeInputSchema).optional(),
});

export default IncidentTypeUncheckedCreateInputSchema;

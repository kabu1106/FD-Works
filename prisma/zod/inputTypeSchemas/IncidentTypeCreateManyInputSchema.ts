import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentTypeCreateManyInputSchema: z.ZodType<Prisma.IncidentTypeCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  categoryId: z.number().int(),
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export default IncidentTypeCreateManyInputSchema;

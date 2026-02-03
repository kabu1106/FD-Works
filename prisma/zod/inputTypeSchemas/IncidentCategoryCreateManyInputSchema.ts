import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentCategoryCreateManyInputSchema: z.ZodType<Prisma.IncidentCategoryCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export default IncidentCategoryCreateManyInputSchema;

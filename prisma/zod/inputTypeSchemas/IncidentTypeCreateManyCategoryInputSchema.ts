import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentTypeCreateManyCategoryInputSchema: z.ZodType<Prisma.IncidentTypeCreateManyCategoryInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export default IncidentTypeCreateManyCategoryInputSchema;

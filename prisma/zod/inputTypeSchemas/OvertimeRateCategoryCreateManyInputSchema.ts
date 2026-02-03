import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeRateCategoryCreateManyInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
});

export default OvertimeRateCategoryCreateManyInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailCreateManyRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateManyRateCategoryInput> = z.strictObject({
  id: z.string().optional(),
  overtimeSummaryId: z.string(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
});

export default OvertimeSummaryDetailCreateManyRateCategoryInputSchema;

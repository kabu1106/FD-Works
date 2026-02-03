import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateManyOvertimeSummaryInput> = z.strictObject({
  id: z.string().optional(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
});

export default OvertimeSummaryDetailCreateManyOvertimeSummaryInputSchema;

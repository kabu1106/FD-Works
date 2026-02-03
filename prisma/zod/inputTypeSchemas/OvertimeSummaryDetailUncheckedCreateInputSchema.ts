import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailUncheckedCreateInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  overtimeSummaryId: z.string(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
});

export default OvertimeSummaryDetailUncheckedCreateInputSchema;

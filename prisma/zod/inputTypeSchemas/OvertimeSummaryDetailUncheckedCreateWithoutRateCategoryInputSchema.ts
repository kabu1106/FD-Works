import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInput> = z.strictObject({
  id: z.string().optional(),
  overtimeSummaryId: z.string(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
});

export default OvertimeSummaryDetailUncheckedCreateWithoutRateCategoryInputSchema;

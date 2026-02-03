import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInput> = z.strictObject({
  id: z.string().optional(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
});

export default OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema';

export const OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateWithoutOvertimeSummaryInput> = z.strictObject({
  id: z.string().optional(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
  rateCategory: z.lazy(() => OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema),
});

export default OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema;

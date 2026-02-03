import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema } from './OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema';
import { OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema } from './OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema';

export const OvertimeSummaryDetailCreateInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateInput> = z.strictObject({
  id: z.string().optional(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
  overtimeSummary: z.lazy(() => OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema),
  rateCategory: z.lazy(() => OvertimeRateCategoryCreateNestedOneWithoutOvertimeSummaryDetailInputSchema),
});

export default OvertimeSummaryDetailCreateInputSchema;

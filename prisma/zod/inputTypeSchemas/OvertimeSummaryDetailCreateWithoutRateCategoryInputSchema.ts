import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema } from './OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema';

export const OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateWithoutRateCategoryInput> = z.strictObject({
  id: z.string().optional(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
  overtimeSummary: z.lazy(() => OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema),
});

export default OvertimeSummaryDetailCreateWithoutRateCategoryInputSchema;

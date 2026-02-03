import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema';

export const OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateWithoutOvertimeSlotsInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema;

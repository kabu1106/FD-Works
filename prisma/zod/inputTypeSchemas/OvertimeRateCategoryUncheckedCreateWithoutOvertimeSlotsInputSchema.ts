import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema';

export const OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema;

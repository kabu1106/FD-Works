import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema';

export const OvertimeRateCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailUncheckedCreateNestedManyWithoutRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryUncheckedCreateInputSchema;

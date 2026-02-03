import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema';

export const OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryUncheckedCreateWithoutOvertimeSummaryDetailInputSchema;

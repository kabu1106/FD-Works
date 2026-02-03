import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema';

export const OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryCreateWithoutOvertimeSummaryDetailInputSchema;

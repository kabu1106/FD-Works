import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema } from './OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema';

export const OvertimeRateCategoryCreateInputSchema: z.ZodType<Prisma.OvertimeRateCategoryCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotCreateNestedManyWithoutOvertimeRateCategoryInputSchema).optional(),
  OvertimeSummaryDetail: z.lazy(() => OvertimeSummaryDetailCreateNestedManyWithoutRateCategoryInputSchema).optional(),
});

export default OvertimeRateCategoryCreateInputSchema;

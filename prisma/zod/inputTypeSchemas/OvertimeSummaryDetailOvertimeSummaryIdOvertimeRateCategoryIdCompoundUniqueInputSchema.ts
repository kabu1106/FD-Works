import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInput> = z.strictObject({
  overtimeSummaryId: z.string(),
  overtimeRateCategoryId: z.number(),
});

export default OvertimeSummaryDetailOvertimeSummaryIdOvertimeRateCategoryIdCompoundUniqueInputSchema;

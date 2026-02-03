import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OvertimeRateCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.OvertimeRateCategoryCountOutputTypeSelect> = z.object({
  overtimeSlots: z.boolean().optional(),
  OvertimeSummaryDetail: z.boolean().optional(),
}).strict();

export default OvertimeRateCategoryCountOutputTypeSelectSchema;

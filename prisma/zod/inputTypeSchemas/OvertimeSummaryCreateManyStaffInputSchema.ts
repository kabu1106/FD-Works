import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryCreateManyStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
});

export default OvertimeSummaryCreateManyStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryCreateManyDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyDutyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
});

export default OvertimeSummaryCreateManyDutyInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryCreateManyInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.coerce.date().optional(),
});

export default OvertimeSummaryCreateManyInputSchema;

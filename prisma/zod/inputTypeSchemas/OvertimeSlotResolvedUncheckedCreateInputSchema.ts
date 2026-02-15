import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSlotResolvedUncheckedCreateInputSchema: z.ZodType<Prisma.OvertimeSlotResolvedUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
  minutes: z.number().int(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  createdAt: z.coerce.date().optional(),
});

export default OvertimeSlotResolvedUncheckedCreateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryUncheckedCreateWithoutDetailsInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  staffId: z.number().int(),
  version: z.number().int().optional(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema;

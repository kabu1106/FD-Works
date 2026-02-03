import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OvertimeSummaryCreateManyStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  dutyId: z.string(),
  version: z.number().int().optional(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default OvertimeSummaryCreateManyStaffInputSchema;

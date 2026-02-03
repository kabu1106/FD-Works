import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  allowanceTypeId: z.number().int(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
});

export default IncidentAllowanceSummaryCreateManyIncidentStaffInputSchema;

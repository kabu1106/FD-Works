import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
});

export default IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema;

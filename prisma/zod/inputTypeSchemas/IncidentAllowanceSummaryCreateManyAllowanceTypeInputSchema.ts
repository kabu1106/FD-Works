import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
});

export default IncidentAllowanceSummaryCreateManyAllowanceTypeInputSchema;

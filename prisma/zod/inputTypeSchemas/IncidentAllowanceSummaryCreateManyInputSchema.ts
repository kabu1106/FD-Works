import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentAllowanceSummaryCreateManyInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaffId: z.string(),
  allowanceTypeId: z.number().int(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
});

export default IncidentAllowanceSummaryCreateManyInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
  incidentStaff: z.lazy(() => IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema),
});

export default IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema;

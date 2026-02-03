import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema';
import { AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentAllowanceSummaryCreateInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateInput> = z.strictObject({
  id: z.string().optional(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
  incidentStaff: z.lazy(() => IncidentStaffCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema),
  allowanceType: z.lazy(() => AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema),
});

export default IncidentAllowanceSummaryCreateInputSchema;

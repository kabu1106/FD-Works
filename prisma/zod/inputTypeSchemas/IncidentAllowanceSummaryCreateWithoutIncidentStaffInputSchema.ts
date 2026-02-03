import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema } from './AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  version: z.number().int().optional(),
  count: z.number().int().optional(),
  isFinalized: z.boolean().optional(),
  allowanceType: z.lazy(() => AllowanceTypeCreateNestedOneWithoutIncidentAllowanceSummaryInputSchema),
});

export default IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema;

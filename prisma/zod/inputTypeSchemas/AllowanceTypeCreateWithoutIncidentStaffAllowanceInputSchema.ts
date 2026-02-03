import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeCreateWithoutIncidentStaffAllowanceInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeCreateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeCreateWithoutIncidentAllowanceSummaryInputSchema;

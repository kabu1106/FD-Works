import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeCreateInputSchema: z.ZodType<Prisma.AllowanceTypeCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  allowanceGroup: z.lazy(() => AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeCreateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeUncheckedCreateInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  allowanceGroupId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeUncheckedCreateInputSchema;

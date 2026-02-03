import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  id: z.number().int().optional(),
  allowanceGroupId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema;

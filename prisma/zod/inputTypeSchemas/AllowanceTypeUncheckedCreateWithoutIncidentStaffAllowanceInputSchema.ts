import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInput> = z.strictObject({
  id: z.number().int().optional(),
  allowanceGroupId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema;

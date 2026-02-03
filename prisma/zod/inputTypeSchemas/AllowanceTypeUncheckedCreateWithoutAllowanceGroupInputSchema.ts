import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedCreateWithoutAllowanceGroupInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema;

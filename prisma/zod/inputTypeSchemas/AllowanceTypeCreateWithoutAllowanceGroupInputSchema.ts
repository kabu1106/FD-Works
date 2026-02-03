import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema';

export const AllowanceTypeCreateWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeCreateWithoutAllowanceGroupInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutAllowanceTypeInputSchema).optional(),
});

export default AllowanceTypeCreateWithoutAllowanceGroupInputSchema;

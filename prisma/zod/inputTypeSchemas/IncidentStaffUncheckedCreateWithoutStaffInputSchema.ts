import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffUncheckedCreateWithoutStaffInputSchema;

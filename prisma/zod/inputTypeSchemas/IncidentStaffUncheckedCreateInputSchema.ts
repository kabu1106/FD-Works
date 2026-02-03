import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffUncheckedCreateInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
  staffId: z.number().int(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffUncheckedCreateInputSchema;

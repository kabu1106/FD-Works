import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
  staffId: z.number().int(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema;

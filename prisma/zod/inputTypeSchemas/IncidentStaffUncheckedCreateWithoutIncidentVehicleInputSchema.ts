import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateWithoutIncidentVehicleInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffUncheckedCreateWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedCreateWithoutAllowancesInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicleId: z.string(),
  staffId: z.number().int(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffUncheckedCreateWithoutAllowancesInputSchema;

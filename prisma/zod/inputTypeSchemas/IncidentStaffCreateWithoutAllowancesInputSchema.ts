import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema';
import { StaffCreateNestedOneWithoutIncidentStaffInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffCreateWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffCreateWithoutAllowancesInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffInputSchema),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffCreateWithoutAllowancesInputSchema;

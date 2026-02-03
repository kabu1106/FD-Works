import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffCreateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema),
  allowances: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffCreateWithoutStaffInputSchema;

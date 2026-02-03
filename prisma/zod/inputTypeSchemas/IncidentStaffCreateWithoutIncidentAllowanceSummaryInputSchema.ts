import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema';
import { StaffCreateNestedOneWithoutIncidentStaffInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffCreateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffInputSchema),
  allowances: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema;

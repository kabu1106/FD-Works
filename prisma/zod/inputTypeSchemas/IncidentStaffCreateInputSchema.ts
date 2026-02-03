import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema';
import { StaffCreateNestedOneWithoutIncidentStaffInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffCreateInputSchema: z.ZodType<Prisma.IncidentStaffCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleCreateNestedOneWithoutIncidentStaffInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffInputSchema),
  allowances: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffCreateInputSchema;

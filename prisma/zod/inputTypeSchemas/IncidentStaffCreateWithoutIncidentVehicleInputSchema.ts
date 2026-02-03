import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutIncidentStaffInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema';

export const IncidentStaffCreateWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffCreateWithoutIncidentVehicleInput> = z.strictObject({
  id: z.string().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffInputSchema),
  allowances: z.lazy(() => IncidentStaffAllowanceCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryCreateNestedManyWithoutIncidentStaffInputSchema).optional(),
});

export default IncidentStaffCreateWithoutIncidentVehicleInputSchema;

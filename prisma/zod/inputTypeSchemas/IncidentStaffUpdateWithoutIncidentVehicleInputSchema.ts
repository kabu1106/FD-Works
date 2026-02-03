import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUpdateWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithoutIncidentVehicleInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUpdateWithoutIncidentVehicleInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema;

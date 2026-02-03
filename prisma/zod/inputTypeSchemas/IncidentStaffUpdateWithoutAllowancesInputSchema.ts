import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUpdateWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithoutAllowancesInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUpdateWithoutAllowancesInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema } from './IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema';
import { IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUpdateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicle: z.lazy(() => IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUpdateWithoutStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUncheckedUpdateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUncheckedUpdateWithoutStaffInputSchema;

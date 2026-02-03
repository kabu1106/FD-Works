import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateWithoutIncidentVehicleInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allowances: z.lazy(() => IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema;

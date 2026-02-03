import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema';

export const IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateWithoutAllowancesInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffNestedInputSchema).optional(),
});

export default IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema;

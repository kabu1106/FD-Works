import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const IncidentStaffUncheckedUpdateManyWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateManyWithoutStaffInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentVehicleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export default IncidentStaffUncheckedUpdateManyWithoutStaffInputSchema;

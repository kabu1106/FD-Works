import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleInputSchema;

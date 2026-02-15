import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const StaffInVehicleUncheckedUpdateManyWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUncheckedUpdateManyWithoutVehicleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default StaffInVehicleUncheckedUpdateManyWithoutVehicleInputSchema;

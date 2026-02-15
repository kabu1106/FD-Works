import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const StaffInVehicleUpdateWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUpdateWithoutVehicleInput> = z.strictObject({
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export default StaffInVehicleUpdateWithoutVehicleInputSchema;

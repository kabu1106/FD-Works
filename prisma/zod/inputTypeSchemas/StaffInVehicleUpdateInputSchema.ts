import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInputSchema } from './DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInputSchema';

export const StaffInVehicleUpdateInputSchema: z.ZodType<Prisma.StaffInVehicleUpdateInput> = z.strictObject({
  staffId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  vehicle: z.lazy(() => DispatchedVehicleUpdateOneRequiredWithoutStaffsNestedInputSchema).optional(),
});

export default StaffInVehicleUpdateInputSchema;

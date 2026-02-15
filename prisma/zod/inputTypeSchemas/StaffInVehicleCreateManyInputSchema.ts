import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleCreateManyInputSchema: z.ZodType<Prisma.StaffInVehicleCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  dispatchedVehicleId: z.number().int(),
  staffId: z.number().int(),
});

export default StaffInVehicleCreateManyInputSchema;

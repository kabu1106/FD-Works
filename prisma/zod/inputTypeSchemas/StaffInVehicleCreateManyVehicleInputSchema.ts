import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleCreateManyVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleCreateManyVehicleInput> = z.strictObject({
  id: z.number().int().optional(),
  staffId: z.number().int(),
});

export default StaffInVehicleCreateManyVehicleInputSchema;

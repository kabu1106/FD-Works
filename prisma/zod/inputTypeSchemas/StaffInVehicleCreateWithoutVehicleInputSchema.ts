import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleCreateWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleCreateWithoutVehicleInput> = z.strictObject({
  staffId: z.number().int(),
});

export default StaffInVehicleCreateWithoutVehicleInputSchema;

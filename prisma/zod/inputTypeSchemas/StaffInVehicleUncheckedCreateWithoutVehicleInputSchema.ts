import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleUncheckedCreateWithoutVehicleInputSchema: z.ZodType<Prisma.StaffInVehicleUncheckedCreateWithoutVehicleInput> = z.strictObject({
  id: z.number().int().optional(),
  staffId: z.number().int(),
});

export default StaffInVehicleUncheckedCreateWithoutVehicleInputSchema;

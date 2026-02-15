import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleUncheckedCreateInputSchema: z.ZodType<Prisma.StaffInVehicleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  dispatchedVehicleId: z.number().int(),
  staffId: z.number().int(),
});

export default StaffInVehicleUncheckedCreateInputSchema;

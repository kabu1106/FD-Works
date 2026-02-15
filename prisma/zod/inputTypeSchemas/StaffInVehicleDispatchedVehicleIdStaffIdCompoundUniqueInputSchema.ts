import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema: z.ZodType<Prisma.StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInput> = z.strictObject({
  dispatchedVehicleId: z.number(),
  staffId: z.number(),
});

export default StaffInVehicleDispatchedVehicleIdStaffIdCompoundUniqueInputSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DispatchedVehicleCountOutputTypeSelectSchema: z.ZodType<Prisma.DispatchedVehicleCountOutputTypeSelect> = z.object({
  staffs: z.boolean().optional(),
}).strict();

export default DispatchedVehicleCountOutputTypeSelectSchema;

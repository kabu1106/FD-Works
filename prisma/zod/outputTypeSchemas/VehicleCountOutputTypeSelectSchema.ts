import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const VehicleCountOutputTypeSelectSchema: z.ZodType<Prisma.VehicleCountOutputTypeSelect> = z.object({
  incidents: z.boolean().optional(),
}).strict();

export default VehicleCountOutputTypeSelectSchema;

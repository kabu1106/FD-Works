import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const IncidentVehicleCountOutputTypeSelectSchema: z.ZodType<Prisma.IncidentVehicleCountOutputTypeSelect> = z.object({
  IncidentStaff: z.boolean().optional(),
}).strict();

export default IncidentVehicleCountOutputTypeSelectSchema;

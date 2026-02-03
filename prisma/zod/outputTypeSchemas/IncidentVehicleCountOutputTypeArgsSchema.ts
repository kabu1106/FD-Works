import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleCountOutputTypeSelectSchema } from './IncidentVehicleCountOutputTypeSelectSchema';

export const IncidentVehicleCountOutputTypeArgsSchema: z.ZodType<Prisma.IncidentVehicleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => IncidentVehicleCountOutputTypeSelectSchema).nullish(),
}).strict();

export default IncidentVehicleCountOutputTypeSelectSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleSelectSchema } from '../inputTypeSchemas/IncidentVehicleSelectSchema';
import { IncidentVehicleIncludeSchema } from '../inputTypeSchemas/IncidentVehicleIncludeSchema';

export const IncidentVehicleArgsSchema: z.ZodType<Prisma.IncidentVehicleDefaultArgs> = z.object({
  select: z.lazy(() => IncidentVehicleSelectSchema).optional(),
  include: z.lazy(() => IncidentVehicleIncludeSchema).optional(),
}).strict();

export default IncidentVehicleArgsSchema;

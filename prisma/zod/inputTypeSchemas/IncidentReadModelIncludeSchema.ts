import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleFindManyArgsSchema } from "../outputTypeSchemas/DispatchedVehicleFindManyArgsSchema"
import { IncidentReadModelCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentReadModelCountOutputTypeArgsSchema"

export const IncidentReadModelIncludeSchema: z.ZodType<Prisma.IncidentReadModelInclude> = z.object({
  vehicles: z.union([z.boolean(),z.lazy(() => DispatchedVehicleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentReadModelCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentReadModelIncludeSchema;

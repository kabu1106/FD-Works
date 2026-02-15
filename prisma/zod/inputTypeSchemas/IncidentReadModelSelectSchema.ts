import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleFindManyArgsSchema } from "../outputTypeSchemas/DispatchedVehicleFindManyArgsSchema"
import { IncidentReadModelCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentReadModelCountOutputTypeArgsSchema"

export const IncidentReadModelSelectSchema: z.ZodType<Prisma.IncidentReadModelSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  locationId: z.boolean().optional(),
  status: z.boolean().optional(),
  occurredAt: z.boolean().optional(),
  closedAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  vehicles: z.union([z.boolean(),z.lazy(() => DispatchedVehicleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentReadModelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default IncidentReadModelSelectSchema;

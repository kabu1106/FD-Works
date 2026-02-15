import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelIncludeSchema } from '../inputTypeSchemas/IncidentReadModelIncludeSchema'
import { IncidentReadModelUpdateInputSchema } from '../inputTypeSchemas/IncidentReadModelUpdateInputSchema'
import { IncidentReadModelUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentReadModelUncheckedUpdateInputSchema'
import { IncidentReadModelWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereUniqueInputSchema'
import { DispatchedVehicleFindManyArgsSchema } from "../outputTypeSchemas/DispatchedVehicleFindManyArgsSchema"
import { IncidentReadModelCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentReadModelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const IncidentReadModelUpdateArgsSchema: z.ZodType<Prisma.IncidentReadModelUpdateArgs> = z.object({
  select: IncidentReadModelSelectSchema.optional(),
  include: z.lazy(() => IncidentReadModelIncludeSchema).optional(),
  data: z.union([ IncidentReadModelUpdateInputSchema, IncidentReadModelUncheckedUpdateInputSchema ]),
  where: IncidentReadModelWhereUniqueInputSchema, 
}).strict();

export default IncidentReadModelUpdateArgsSchema;

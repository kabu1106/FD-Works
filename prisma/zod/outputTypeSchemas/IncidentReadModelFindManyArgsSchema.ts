import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentReadModelIncludeSchema } from '../inputTypeSchemas/IncidentReadModelIncludeSchema'
import { IncidentReadModelWhereInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereInputSchema'
import { IncidentReadModelOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentReadModelOrderByWithRelationInputSchema'
import { IncidentReadModelWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentReadModelWhereUniqueInputSchema'
import { IncidentReadModelScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentReadModelScalarFieldEnumSchema'
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

export const IncidentReadModelFindManyArgsSchema: z.ZodType<Prisma.IncidentReadModelFindManyArgs> = z.object({
  select: IncidentReadModelSelectSchema.optional(),
  include: z.lazy(() => IncidentReadModelIncludeSchema).optional(),
  where: IncidentReadModelWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentReadModelOrderByWithRelationInputSchema.array(), IncidentReadModelOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentReadModelWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IncidentReadModelScalarFieldEnumSchema, IncidentReadModelScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IncidentReadModelFindManyArgsSchema;

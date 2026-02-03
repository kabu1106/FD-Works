import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationIncludeSchema } from '../inputTypeSchemas/LocationIncludeSchema'
import { LocationUpdateInputSchema } from '../inputTypeSchemas/LocationUpdateInputSchema'
import { LocationUncheckedUpdateInputSchema } from '../inputTypeSchemas/LocationUncheckedUpdateInputSchema'
import { LocationWhereUniqueInputSchema } from '../inputTypeSchemas/LocationWhereUniqueInputSchema'
import { LocationArgsSchema } from "../outputTypeSchemas/LocationArgsSchema"
import { LocationFindManyArgsSchema } from "../outputTypeSchemas/LocationFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { LocationCountOutputTypeArgsSchema } from "../outputTypeSchemas/LocationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocationSelectSchema: z.ZodType<Prisma.LocationSelect> = z.object({
  id: z.boolean().optional(),
  parentId: z.boolean().optional(),
  type: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  parent: z.union([z.boolean(),z.lazy(() => LocationArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => LocationFindManyArgsSchema)]).optional(),
  incidents: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LocationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LocationUpdateArgsSchema: z.ZodType<Prisma.LocationUpdateArgs> = z.object({
  select: LocationSelectSchema.optional(),
  include: z.lazy(() => LocationIncludeSchema).optional(),
  data: z.union([ LocationUpdateInputSchema, LocationUncheckedUpdateInputSchema ]),
  where: LocationWhereUniqueInputSchema, 
}).strict();

export default LocationUpdateArgsSchema;

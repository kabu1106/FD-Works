import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsSchema } from "../outputTypeSchemas/LocationArgsSchema"
import { LocationFindManyArgsSchema } from "../outputTypeSchemas/LocationFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { LocationCountOutputTypeArgsSchema } from "../outputTypeSchemas/LocationCountOutputTypeArgsSchema"

export const LocationIncludeSchema: z.ZodType<Prisma.LocationInclude> = z.object({
  parent: z.union([z.boolean(),z.lazy(() => LocationArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => LocationFindManyArgsSchema)]).optional(),
  incidents: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LocationCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default LocationIncludeSchema;

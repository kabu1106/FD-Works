import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryArgsSchema } from "../outputTypeSchemas/IncidentCategoryArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { IncidentTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentTypeCountOutputTypeArgsSchema"

export const IncidentTypeIncludeSchema: z.ZodType<Prisma.IncidentTypeInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => IncidentCategoryArgsSchema)]).optional(),
  Incident: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentTypeCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentTypeIncludeSchema;

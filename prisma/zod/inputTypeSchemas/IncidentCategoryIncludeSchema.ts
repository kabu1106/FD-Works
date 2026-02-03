import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeFindManyArgsSchema } from "../outputTypeSchemas/IncidentTypeFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { IncidentCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentCategoryCountOutputTypeArgsSchema"

export const IncidentCategoryIncludeSchema: z.ZodType<Prisma.IncidentCategoryInclude> = z.object({
  types: z.union([z.boolean(),z.lazy(() => IncidentTypeFindManyArgsSchema)]).optional(),
  Incident: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default IncidentCategoryIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeIncludeSchema } from '../inputTypeSchemas/IncidentTypeIncludeSchema'
import { IncidentTypeCreateInputSchema } from '../inputTypeSchemas/IncidentTypeCreateInputSchema'
import { IncidentTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentTypeUncheckedCreateInputSchema'
import { IncidentCategoryArgsSchema } from "../outputTypeSchemas/IncidentCategoryArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { IncidentTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentTypeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentTypeSelectSchema: z.ZodType<Prisma.IncidentTypeSelect> = z.object({
  id: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  isActive: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => IncidentCategoryArgsSchema)]).optional(),
  Incident: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IncidentTypeCreateArgsSchema: z.ZodType<Prisma.IncidentTypeCreateArgs> = z.object({
  select: IncidentTypeSelectSchema.optional(),
  include: z.lazy(() => IncidentTypeIncludeSchema).optional(),
  data: z.union([ IncidentTypeCreateInputSchema, IncidentTypeUncheckedCreateInputSchema ]),
}).strict();

export default IncidentTypeCreateArgsSchema;

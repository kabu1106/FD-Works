import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryIncludeSchema } from '../inputTypeSchemas/IncidentCategoryIncludeSchema'
import { IncidentCategoryCreateInputSchema } from '../inputTypeSchemas/IncidentCategoryCreateInputSchema'
import { IncidentCategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/IncidentCategoryUncheckedCreateInputSchema'
import { IncidentTypeFindManyArgsSchema } from "../outputTypeSchemas/IncidentTypeFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { IncidentCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentCategorySelectSchema: z.ZodType<Prisma.IncidentCategorySelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  isActive: z.boolean().optional(),
  types: z.union([z.boolean(),z.lazy(() => IncidentTypeFindManyArgsSchema)]).optional(),
  Incident: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IncidentCategoryCreateArgsSchema: z.ZodType<Prisma.IncidentCategoryCreateArgs> = z.object({
  select: IncidentCategorySelectSchema.optional(),
  include: z.lazy(() => IncidentCategoryIncludeSchema).optional(),
  data: z.union([ IncidentCategoryCreateInputSchema, IncidentCategoryUncheckedCreateInputSchema ]),
}).strict();

export default IncidentCategoryCreateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentTypeIncludeSchema } from '../inputTypeSchemas/IncidentTypeIncludeSchema'
import { IncidentTypeUpdateInputSchema } from '../inputTypeSchemas/IncidentTypeUpdateInputSchema'
import { IncidentTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/IncidentTypeUncheckedUpdateInputSchema'
import { IncidentTypeWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentTypeWhereUniqueInputSchema'
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

export const IncidentTypeUpdateArgsSchema: z.ZodType<Prisma.IncidentTypeUpdateArgs> = z.object({
  select: IncidentTypeSelectSchema.optional(),
  include: z.lazy(() => IncidentTypeIncludeSchema).optional(),
  data: z.union([ IncidentTypeUpdateInputSchema, IncidentTypeUncheckedUpdateInputSchema ]),
  where: IncidentTypeWhereUniqueInputSchema, 
}).strict();

export default IncidentTypeUpdateArgsSchema;

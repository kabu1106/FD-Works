import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentCategoryIncludeSchema } from '../inputTypeSchemas/IncidentCategoryIncludeSchema'
import { IncidentCategoryWhereInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereInputSchema'
import { IncidentCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentCategoryOrderByWithRelationInputSchema'
import { IncidentCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentCategoryWhereUniqueInputSchema'
import { IncidentCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentCategoryScalarFieldEnumSchema'
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

export const IncidentCategoryFindFirstArgsSchema: z.ZodType<Prisma.IncidentCategoryFindFirstArgs> = z.object({
  select: IncidentCategorySelectSchema.optional(),
  include: z.lazy(() => IncidentCategoryIncludeSchema).optional(),
  where: IncidentCategoryWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentCategoryOrderByWithRelationInputSchema.array(), IncidentCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentCategoryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IncidentCategoryScalarFieldEnumSchema, IncidentCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default IncidentCategoryFindFirstArgsSchema;

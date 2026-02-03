import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupIncludeSchema } from '../inputTypeSchemas/AllowanceGroupIncludeSchema'
import { AllowanceGroupWhereInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereInputSchema'
import { AllowanceGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/AllowanceGroupOrderByWithRelationInputSchema'
import { AllowanceGroupWhereUniqueInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereUniqueInputSchema'
import { AllowanceGroupScalarFieldEnumSchema } from '../inputTypeSchemas/AllowanceGroupScalarFieldEnumSchema'
import { AllowanceTypeFindManyArgsSchema } from "../outputTypeSchemas/AllowanceTypeFindManyArgsSchema"
import { AllowanceGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/AllowanceGroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AllowanceGroupSelectSchema: z.ZodType<Prisma.AllowanceGroupSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  isActive: z.boolean().optional(),
  allowanceTypes: z.union([z.boolean(),z.lazy(() => AllowanceTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AllowanceGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AllowanceGroupFindManyArgsSchema: z.ZodType<Prisma.AllowanceGroupFindManyArgs> = z.object({
  select: AllowanceGroupSelectSchema.optional(),
  include: z.lazy(() => AllowanceGroupIncludeSchema).optional(),
  where: AllowanceGroupWhereInputSchema.optional(), 
  orderBy: z.union([ AllowanceGroupOrderByWithRelationInputSchema.array(), AllowanceGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: AllowanceGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AllowanceGroupScalarFieldEnumSchema, AllowanceGroupScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default AllowanceGroupFindManyArgsSchema;

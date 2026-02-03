import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupIncludeSchema } from '../inputTypeSchemas/AllowanceGroupIncludeSchema'
import { AllowanceGroupWhereUniqueInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereUniqueInputSchema'
import { AllowanceGroupCreateInputSchema } from '../inputTypeSchemas/AllowanceGroupCreateInputSchema'
import { AllowanceGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/AllowanceGroupUncheckedCreateInputSchema'
import { AllowanceGroupUpdateInputSchema } from '../inputTypeSchemas/AllowanceGroupUpdateInputSchema'
import { AllowanceGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/AllowanceGroupUncheckedUpdateInputSchema'
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

export const AllowanceGroupUpsertArgsSchema: z.ZodType<Prisma.AllowanceGroupUpsertArgs> = z.object({
  select: AllowanceGroupSelectSchema.optional(),
  include: z.lazy(() => AllowanceGroupIncludeSchema).optional(),
  where: AllowanceGroupWhereUniqueInputSchema, 
  create: z.union([ AllowanceGroupCreateInputSchema, AllowanceGroupUncheckedCreateInputSchema ]),
  update: z.union([ AllowanceGroupUpdateInputSchema, AllowanceGroupUncheckedUpdateInputSchema ]),
}).strict();

export default AllowanceGroupUpsertArgsSchema;

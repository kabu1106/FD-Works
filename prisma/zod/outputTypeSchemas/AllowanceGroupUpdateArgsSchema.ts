import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupIncludeSchema } from '../inputTypeSchemas/AllowanceGroupIncludeSchema'
import { AllowanceGroupUpdateInputSchema } from '../inputTypeSchemas/AllowanceGroupUpdateInputSchema'
import { AllowanceGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/AllowanceGroupUncheckedUpdateInputSchema'
import { AllowanceGroupWhereUniqueInputSchema } from '../inputTypeSchemas/AllowanceGroupWhereUniqueInputSchema'
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

export const AllowanceGroupUpdateArgsSchema: z.ZodType<Prisma.AllowanceGroupUpdateArgs> = z.object({
  select: AllowanceGroupSelectSchema.optional(),
  include: z.lazy(() => AllowanceGroupIncludeSchema).optional(),
  data: z.union([ AllowanceGroupUpdateInputSchema, AllowanceGroupUncheckedUpdateInputSchema ]),
  where: AllowanceGroupWhereUniqueInputSchema, 
}).strict();

export default AllowanceGroupUpdateArgsSchema;

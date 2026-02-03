import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupIncludeSchema } from '../inputTypeSchemas/SpecialLeaveGroupIncludeSchema'
import { SpecialLeaveGroupWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereUniqueInputSchema'
import { SpecialLeaveGroupCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupCreateInputSchema'
import { SpecialLeaveGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUncheckedCreateInputSchema'
import { SpecialLeaveGroupUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUpdateInputSchema'
import { SpecialLeaveGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUncheckedUpdateInputSchema'
import { SpecialLeaveTypeFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeFindManyArgsSchema"
import { SpecialLeaveGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveGroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpecialLeaveGroupSelectSchema: z.ZodType<Prisma.SpecialLeaveGroupSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  SpecialLeaveType: z.union([z.boolean(),z.lazy(() => SpecialLeaveTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpecialLeaveGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SpecialLeaveGroupUpsertArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupUpsertArgs> = z.object({
  select: SpecialLeaveGroupSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveGroupIncludeSchema).optional(),
  where: SpecialLeaveGroupWhereUniqueInputSchema, 
  create: z.union([ SpecialLeaveGroupCreateInputSchema, SpecialLeaveGroupUncheckedCreateInputSchema ]),
  update: z.union([ SpecialLeaveGroupUpdateInputSchema, SpecialLeaveGroupUncheckedUpdateInputSchema ]),
}).strict();

export default SpecialLeaveGroupUpsertArgsSchema;

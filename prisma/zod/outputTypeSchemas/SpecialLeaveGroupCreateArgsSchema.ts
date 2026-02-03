import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupIncludeSchema } from '../inputTypeSchemas/SpecialLeaveGroupIncludeSchema'
import { SpecialLeaveGroupCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupCreateInputSchema'
import { SpecialLeaveGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupUncheckedCreateInputSchema'
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

export const SpecialLeaveGroupCreateArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateArgs> = z.object({
  select: SpecialLeaveGroupSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveGroupIncludeSchema).optional(),
  data: z.union([ SpecialLeaveGroupCreateInputSchema, SpecialLeaveGroupUncheckedCreateInputSchema ]),
}).strict();

export default SpecialLeaveGroupCreateArgsSchema;

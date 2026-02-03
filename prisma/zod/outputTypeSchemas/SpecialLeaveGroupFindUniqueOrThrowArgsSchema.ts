import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupIncludeSchema } from '../inputTypeSchemas/SpecialLeaveGroupIncludeSchema'
import { SpecialLeaveGroupWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereUniqueInputSchema'
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

export const SpecialLeaveGroupFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupFindUniqueOrThrowArgs> = z.object({
  select: SpecialLeaveGroupSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveGroupIncludeSchema).optional(),
  where: SpecialLeaveGroupWhereUniqueInputSchema, 
}).strict();

export default SpecialLeaveGroupFindUniqueOrThrowArgsSchema;

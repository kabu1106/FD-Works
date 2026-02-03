import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupIncludeSchema } from '../inputTypeSchemas/SpecialLeaveGroupIncludeSchema'
import { SpecialLeaveGroupWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereInputSchema'
import { SpecialLeaveGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupOrderByWithRelationInputSchema'
import { SpecialLeaveGroupWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveGroupWhereUniqueInputSchema'
import { SpecialLeaveGroupScalarFieldEnumSchema } from '../inputTypeSchemas/SpecialLeaveGroupScalarFieldEnumSchema'
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

export const SpecialLeaveGroupFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupFindFirstOrThrowArgs> = z.object({
  select: SpecialLeaveGroupSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveGroupIncludeSchema).optional(),
  where: SpecialLeaveGroupWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveGroupOrderByWithRelationInputSchema.array(), SpecialLeaveGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: SpecialLeaveGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SpecialLeaveGroupScalarFieldEnumSchema, SpecialLeaveGroupScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default SpecialLeaveGroupFindFirstOrThrowArgsSchema;

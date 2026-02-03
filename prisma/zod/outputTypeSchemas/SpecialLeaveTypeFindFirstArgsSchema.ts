import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeIncludeSchema } from '../inputTypeSchemas/SpecialLeaveTypeIncludeSchema'
import { SpecialLeaveTypeWhereInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereInputSchema'
import { SpecialLeaveTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeOrderByWithRelationInputSchema'
import { SpecialLeaveTypeWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereUniqueInputSchema'
import { SpecialLeaveTypeScalarFieldEnumSchema } from '../inputTypeSchemas/SpecialLeaveTypeScalarFieldEnumSchema'
import { SpecialLeaveGroupArgsSchema } from "../outputTypeSchemas/SpecialLeaveGroupArgsSchema"
import { SpecialLeaveAssignmentFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveAssignmentFindManyArgsSchema"
import { SpecialLeaveTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpecialLeaveTypeSelectSchema: z.ZodType<Prisma.SpecialLeaveTypeSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  specialLeaveGroupId: z.boolean().optional(),
  isActive: z.boolean().optional(),
  specialLeaveGroup: z.union([z.boolean(),z.lazy(() => SpecialLeaveGroupArgsSchema)]).optional(),
  specialLeaveAssignments: z.union([z.boolean(),z.lazy(() => SpecialLeaveAssignmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpecialLeaveTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SpecialLeaveTypeFindFirstArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeFindFirstArgs> = z.object({
  select: SpecialLeaveTypeSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveTypeIncludeSchema).optional(),
  where: SpecialLeaveTypeWhereInputSchema.optional(), 
  orderBy: z.union([ SpecialLeaveTypeOrderByWithRelationInputSchema.array(), SpecialLeaveTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: SpecialLeaveTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SpecialLeaveTypeScalarFieldEnumSchema, SpecialLeaveTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default SpecialLeaveTypeFindFirstArgsSchema;

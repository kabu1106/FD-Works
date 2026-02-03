import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupIncludeSchema } from '../inputTypeSchemas/WorkGroupIncludeSchema'
import { WorkGroupWhereInputSchema } from '../inputTypeSchemas/WorkGroupWhereInputSchema'
import { WorkGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkGroupOrderByWithRelationInputSchema'
import { WorkGroupWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupWhereUniqueInputSchema'
import { WorkGroupScalarFieldEnumSchema } from '../inputTypeSchemas/WorkGroupScalarFieldEnumSchema'
import { OvertimeSlotFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSlotFindManyArgsSchema"
import { WorkGroupAssignmentFindManyArgsSchema } from "../outputTypeSchemas/WorkGroupAssignmentFindManyArgsSchema"
import { WorkGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkGroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkGroupSelectSchema: z.ZodType<Prisma.WorkGroupSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  overtimeSlots: z.union([z.boolean(),z.lazy(() => OvertimeSlotFindManyArgsSchema)]).optional(),
  WorkGroupAssignment: z.union([z.boolean(),z.lazy(() => WorkGroupAssignmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkGroupFindFirstArgsSchema: z.ZodType<Prisma.WorkGroupFindFirstArgs> = z.object({
  select: WorkGroupSelectSchema.optional(),
  include: z.lazy(() => WorkGroupIncludeSchema).optional(),
  where: WorkGroupWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupOrderByWithRelationInputSchema.array(), WorkGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkGroupWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkGroupScalarFieldEnumSchema, WorkGroupScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default WorkGroupFindFirstArgsSchema;

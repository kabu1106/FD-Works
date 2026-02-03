import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupIncludeSchema } from '../inputTypeSchemas/WorkGroupIncludeSchema'
import { WorkGroupUpdateInputSchema } from '../inputTypeSchemas/WorkGroupUpdateInputSchema'
import { WorkGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkGroupUncheckedUpdateInputSchema'
import { WorkGroupWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupWhereUniqueInputSchema'
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

export const WorkGroupUpdateArgsSchema: z.ZodType<Prisma.WorkGroupUpdateArgs> = z.object({
  select: WorkGroupSelectSchema.optional(),
  include: z.lazy(() => WorkGroupIncludeSchema).optional(),
  data: z.union([ WorkGroupUpdateInputSchema, WorkGroupUncheckedUpdateInputSchema ]),
  where: WorkGroupWhereUniqueInputSchema, 
}).strict();

export default WorkGroupUpdateArgsSchema;

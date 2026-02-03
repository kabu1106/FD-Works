import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupIncludeSchema } from '../inputTypeSchemas/WorkGroupIncludeSchema'
import { WorkGroupWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupWhereUniqueInputSchema'
import { WorkGroupCreateInputSchema } from '../inputTypeSchemas/WorkGroupCreateInputSchema'
import { WorkGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkGroupUncheckedCreateInputSchema'
import { WorkGroupUpdateInputSchema } from '../inputTypeSchemas/WorkGroupUpdateInputSchema'
import { WorkGroupUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkGroupUncheckedUpdateInputSchema'
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

export const WorkGroupUpsertArgsSchema: z.ZodType<Prisma.WorkGroupUpsertArgs> = z.object({
  select: WorkGroupSelectSchema.optional(),
  include: z.lazy(() => WorkGroupIncludeSchema).optional(),
  where: WorkGroupWhereUniqueInputSchema, 
  create: z.union([ WorkGroupCreateInputSchema, WorkGroupUncheckedCreateInputSchema ]),
  update: z.union([ WorkGroupUpdateInputSchema, WorkGroupUncheckedUpdateInputSchema ]),
}).strict();

export default WorkGroupUpsertArgsSchema;

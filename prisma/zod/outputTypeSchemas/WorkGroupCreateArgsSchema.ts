import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupIncludeSchema } from '../inputTypeSchemas/WorkGroupIncludeSchema'
import { WorkGroupCreateInputSchema } from '../inputTypeSchemas/WorkGroupCreateInputSchema'
import { WorkGroupUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkGroupUncheckedCreateInputSchema'
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

export const WorkGroupCreateArgsSchema: z.ZodType<Prisma.WorkGroupCreateArgs> = z.object({
  select: WorkGroupSelectSchema.optional(),
  include: z.lazy(() => WorkGroupIncludeSchema).optional(),
  data: z.union([ WorkGroupCreateInputSchema, WorkGroupUncheckedCreateInputSchema ]),
}).strict();

export default WorkGroupCreateArgsSchema;

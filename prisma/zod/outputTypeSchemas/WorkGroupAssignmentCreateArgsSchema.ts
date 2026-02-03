import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentIncludeSchema } from '../inputTypeSchemas/WorkGroupAssignmentIncludeSchema'
import { WorkGroupAssignmentCreateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentCreateInputSchema'
import { WorkGroupAssignmentUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUncheckedCreateInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkGroupAssignmentSelectSchema: z.ZodType<Prisma.WorkGroupAssignmentSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  workGroupId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const WorkGroupAssignmentCreateArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentCreateArgs> = z.object({
  select: WorkGroupAssignmentSelectSchema.optional(),
  include: z.lazy(() => WorkGroupAssignmentIncludeSchema).optional(),
  data: z.union([ WorkGroupAssignmentCreateInputSchema, WorkGroupAssignmentUncheckedCreateInputSchema ]),
}).strict();

export default WorkGroupAssignmentCreateArgsSchema;

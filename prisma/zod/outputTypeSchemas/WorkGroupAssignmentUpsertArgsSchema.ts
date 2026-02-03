import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentIncludeSchema } from '../inputTypeSchemas/WorkGroupAssignmentIncludeSchema'
import { WorkGroupAssignmentWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereUniqueInputSchema'
import { WorkGroupAssignmentCreateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentCreateInputSchema'
import { WorkGroupAssignmentUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUncheckedCreateInputSchema'
import { WorkGroupAssignmentUpdateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUpdateInputSchema'
import { WorkGroupAssignmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentUncheckedUpdateInputSchema'
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

export const WorkGroupAssignmentUpsertArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentUpsertArgs> = z.object({
  select: WorkGroupAssignmentSelectSchema.optional(),
  include: z.lazy(() => WorkGroupAssignmentIncludeSchema).optional(),
  where: WorkGroupAssignmentWhereUniqueInputSchema, 
  create: z.union([ WorkGroupAssignmentCreateInputSchema, WorkGroupAssignmentUncheckedCreateInputSchema ]),
  update: z.union([ WorkGroupAssignmentUpdateInputSchema, WorkGroupAssignmentUncheckedUpdateInputSchema ]),
}).strict();

export default WorkGroupAssignmentUpsertArgsSchema;

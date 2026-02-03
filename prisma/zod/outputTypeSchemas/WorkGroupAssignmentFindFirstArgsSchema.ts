import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkGroupAssignmentIncludeSchema } from '../inputTypeSchemas/WorkGroupAssignmentIncludeSchema'
import { WorkGroupAssignmentWhereInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereInputSchema'
import { WorkGroupAssignmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentOrderByWithRelationInputSchema'
import { WorkGroupAssignmentWhereUniqueInputSchema } from '../inputTypeSchemas/WorkGroupAssignmentWhereUniqueInputSchema'
import { WorkGroupAssignmentScalarFieldEnumSchema } from '../inputTypeSchemas/WorkGroupAssignmentScalarFieldEnumSchema'
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

export const WorkGroupAssignmentFindFirstArgsSchema: z.ZodType<Prisma.WorkGroupAssignmentFindFirstArgs> = z.object({
  select: WorkGroupAssignmentSelectSchema.optional(),
  include: z.lazy(() => WorkGroupAssignmentIncludeSchema).optional(),
  where: WorkGroupAssignmentWhereInputSchema.optional(), 
  orderBy: z.union([ WorkGroupAssignmentOrderByWithRelationInputSchema.array(), WorkGroupAssignmentOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkGroupAssignmentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkGroupAssignmentScalarFieldEnumSchema, WorkGroupAssignmentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default WorkGroupAssignmentFindFirstArgsSchema;

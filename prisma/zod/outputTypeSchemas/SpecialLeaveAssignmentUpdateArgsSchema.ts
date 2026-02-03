import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveAssignmentIncludeSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentIncludeSchema'
import { SpecialLeaveAssignmentUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentUpdateInputSchema'
import { SpecialLeaveAssignmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentUncheckedUpdateInputSchema'
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveAssignmentWhereUniqueInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { SpecialLeaveTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SpecialLeaveAssignmentSelectSchema: z.ZodType<Prisma.SpecialLeaveAssignmentSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  specialLeaveTypeId: z.boolean().optional(),
  baseDate: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  specialLeaveType: z.union([z.boolean(),z.lazy(() => SpecialLeaveTypeArgsSchema)]).optional(),
}).strict()

export const SpecialLeaveAssignmentUpdateArgsSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateArgs> = z.object({
  select: SpecialLeaveAssignmentSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveAssignmentIncludeSchema).optional(),
  data: z.union([ SpecialLeaveAssignmentUpdateInputSchema, SpecialLeaveAssignmentUncheckedUpdateInputSchema ]),
  where: SpecialLeaveAssignmentWhereUniqueInputSchema, 
}).strict();

export default SpecialLeaveAssignmentUpdateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeIncludeSchema } from '../inputTypeSchemas/SpecialLeaveTypeIncludeSchema'
import { SpecialLeaveTypeUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUpdateInputSchema'
import { SpecialLeaveTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUncheckedUpdateInputSchema'
import { SpecialLeaveTypeWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereUniqueInputSchema'
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

export const SpecialLeaveTypeUpdateArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateArgs> = z.object({
  select: SpecialLeaveTypeSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveTypeIncludeSchema).optional(),
  data: z.union([ SpecialLeaveTypeUpdateInputSchema, SpecialLeaveTypeUncheckedUpdateInputSchema ]),
  where: SpecialLeaveTypeWhereUniqueInputSchema, 
}).strict();

export default SpecialLeaveTypeUpdateArgsSchema;

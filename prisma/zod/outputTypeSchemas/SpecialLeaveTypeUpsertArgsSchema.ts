import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeIncludeSchema } from '../inputTypeSchemas/SpecialLeaveTypeIncludeSchema'
import { SpecialLeaveTypeWhereUniqueInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeWhereUniqueInputSchema'
import { SpecialLeaveTypeCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeCreateInputSchema'
import { SpecialLeaveTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUncheckedCreateInputSchema'
import { SpecialLeaveTypeUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUpdateInputSchema'
import { SpecialLeaveTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/SpecialLeaveTypeUncheckedUpdateInputSchema'
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

export const SpecialLeaveTypeUpsertArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeUpsertArgs> = z.object({
  select: SpecialLeaveTypeSelectSchema.optional(),
  include: z.lazy(() => SpecialLeaveTypeIncludeSchema).optional(),
  where: SpecialLeaveTypeWhereUniqueInputSchema, 
  create: z.union([ SpecialLeaveTypeCreateInputSchema, SpecialLeaveTypeUncheckedCreateInputSchema ]),
  update: z.union([ SpecialLeaveTypeUpdateInputSchema, SpecialLeaveTypeUncheckedUpdateInputSchema ]),
}).strict();

export default SpecialLeaveTypeUpsertArgsSchema;

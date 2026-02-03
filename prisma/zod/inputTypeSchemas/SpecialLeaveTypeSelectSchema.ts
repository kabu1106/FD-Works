import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupArgsSchema } from "../outputTypeSchemas/SpecialLeaveGroupArgsSchema"
import { SpecialLeaveAssignmentFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveAssignmentFindManyArgsSchema"
import { SpecialLeaveTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeCountOutputTypeArgsSchema"

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

export default SpecialLeaveTypeSelectSchema;

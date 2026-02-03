import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeFindManyArgsSchema"
import { SpecialLeaveGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveGroupCountOutputTypeArgsSchema"

export const SpecialLeaveGroupSelectSchema: z.ZodType<Prisma.SpecialLeaveGroupSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  SpecialLeaveType: z.union([z.boolean(),z.lazy(() => SpecialLeaveTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpecialLeaveGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SpecialLeaveGroupSelectSchema;

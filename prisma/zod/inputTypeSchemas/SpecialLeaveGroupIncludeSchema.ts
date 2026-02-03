import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveTypeFindManyArgsSchema"
import { SpecialLeaveGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/SpecialLeaveGroupCountOutputTypeArgsSchema"

export const SpecialLeaveGroupIncludeSchema: z.ZodType<Prisma.SpecialLeaveGroupInclude> = z.object({
  SpecialLeaveType: z.union([z.boolean(),z.lazy(() => SpecialLeaveTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SpecialLeaveGroupCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default SpecialLeaveGroupIncludeSchema;

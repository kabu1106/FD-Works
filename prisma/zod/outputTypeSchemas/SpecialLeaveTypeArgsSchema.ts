import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeSelectSchema } from '../inputTypeSchemas/SpecialLeaveTypeSelectSchema';
import { SpecialLeaveTypeIncludeSchema } from '../inputTypeSchemas/SpecialLeaveTypeIncludeSchema';

export const SpecialLeaveTypeArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeDefaultArgs> = z.object({
  select: z.lazy(() => SpecialLeaveTypeSelectSchema).optional(),
  include: z.lazy(() => SpecialLeaveTypeIncludeSchema).optional(),
}).strict();

export default SpecialLeaveTypeArgsSchema;

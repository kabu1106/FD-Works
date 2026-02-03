import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupSelectSchema } from '../inputTypeSchemas/SpecialLeaveGroupSelectSchema';
import { SpecialLeaveGroupIncludeSchema } from '../inputTypeSchemas/SpecialLeaveGroupIncludeSchema';

export const SpecialLeaveGroupArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupDefaultArgs> = z.object({
  select: z.lazy(() => SpecialLeaveGroupSelectSchema).optional(),
  include: z.lazy(() => SpecialLeaveGroupIncludeSchema).optional(),
}).strict();

export default SpecialLeaveGroupArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SpecialLeaveGroupCountOutputTypeSelectSchema: z.ZodType<Prisma.SpecialLeaveGroupCountOutputTypeSelect> = z.object({
  SpecialLeaveType: z.boolean().optional(),
}).strict();

export default SpecialLeaveGroupCountOutputTypeSelectSchema;

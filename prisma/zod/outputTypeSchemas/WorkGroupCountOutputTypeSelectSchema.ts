import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorkGroupCountOutputTypeSelectSchema: z.ZodType<Prisma.WorkGroupCountOutputTypeSelect> = z.object({
  overtimeSlots: z.boolean().optional(),
  WorkGroupAssignment: z.boolean().optional(),
}).strict();

export default WorkGroupCountOutputTypeSelectSchema;

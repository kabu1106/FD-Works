import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorkShiftCountOutputTypeSelectSchema: z.ZodType<Prisma.WorkShiftCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
  workShiftDays: z.boolean().optional(),
}).strict();

export default WorkShiftCountOutputTypeSelectSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftCountOutputTypeSelectSchema } from './WorkShiftCountOutputTypeSelectSchema';

export const WorkShiftCountOutputTypeArgsSchema: z.ZodType<Prisma.WorkShiftCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WorkShiftCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WorkShiftCountOutputTypeSelectSchema;

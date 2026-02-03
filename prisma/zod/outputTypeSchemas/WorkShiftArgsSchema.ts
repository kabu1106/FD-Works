import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftSelectSchema } from '../inputTypeSchemas/WorkShiftSelectSchema';
import { WorkShiftIncludeSchema } from '../inputTypeSchemas/WorkShiftIncludeSchema';

export const WorkShiftArgsSchema: z.ZodType<Prisma.WorkShiftDefaultArgs> = z.object({
  select: z.lazy(() => WorkShiftSelectSchema).optional(),
  include: z.lazy(() => WorkShiftIncludeSchema).optional(),
}).strict();

export default WorkShiftArgsSchema;

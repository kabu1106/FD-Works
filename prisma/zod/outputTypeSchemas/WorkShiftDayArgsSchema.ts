import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDaySelectSchema } from '../inputTypeSchemas/WorkShiftDaySelectSchema';
import { WorkShiftDayIncludeSchema } from '../inputTypeSchemas/WorkShiftDayIncludeSchema';

export const WorkShiftDayArgsSchema: z.ZodType<Prisma.WorkShiftDayDefaultArgs> = z.object({
  select: z.lazy(() => WorkShiftDaySelectSchema).optional(),
  include: z.lazy(() => WorkShiftDayIncludeSchema).optional(),
}).strict();

export default WorkShiftDayArgsSchema;

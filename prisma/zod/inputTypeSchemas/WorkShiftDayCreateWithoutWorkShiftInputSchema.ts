import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const WorkShiftDayCreateWithoutWorkShiftInputSchema: z.ZodType<Prisma.WorkShiftDayCreateWithoutWorkShiftInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
});

export default WorkShiftDayCreateWithoutWorkShiftInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const WorkShiftDayUncheckedCreateInputSchema: z.ZodType<Prisma.WorkShiftDayUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  workShiftId: z.number().int(),
});

export default WorkShiftDayUncheckedCreateInputSchema;

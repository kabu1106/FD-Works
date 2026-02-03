import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const WorkShiftDayCreateManyInputSchema: z.ZodType<Prisma.WorkShiftDayCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  workShiftId: z.number().int(),
});

export default WorkShiftDayCreateManyInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { WorkShiftCreateNestedOneWithoutWorkShiftDaysInputSchema } from './WorkShiftCreateNestedOneWithoutWorkShiftDaysInputSchema';

export const WorkShiftDayCreateInputSchema: z.ZodType<Prisma.WorkShiftDayCreateInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  workShift: z.lazy(() => WorkShiftCreateNestedOneWithoutWorkShiftDaysInputSchema),
});

export default WorkShiftDayCreateInputSchema;

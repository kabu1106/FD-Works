import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutWeeklyDayOffsInputSchema } from './StaffCreateNestedOneWithoutWeeklyDayOffsInputSchema';

export const WeeklyDayOffCreateInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutWeeklyDayOffsInputSchema),
});

export default WeeklyDayOffCreateInputSchema;

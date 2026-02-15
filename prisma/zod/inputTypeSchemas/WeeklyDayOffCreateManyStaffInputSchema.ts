import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeeklyDayOffCreateManyStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateManyStaffInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default WeeklyDayOffCreateManyStaffInputSchema;

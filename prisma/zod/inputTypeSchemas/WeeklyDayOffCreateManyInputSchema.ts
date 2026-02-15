import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeeklyDayOffCreateManyInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  staffId: z.number().int(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default WeeklyDayOffCreateManyInputSchema;

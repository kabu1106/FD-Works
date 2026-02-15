import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeeklyDayOffCreateWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default WeeklyDayOffCreateWithoutStaffInputSchema;

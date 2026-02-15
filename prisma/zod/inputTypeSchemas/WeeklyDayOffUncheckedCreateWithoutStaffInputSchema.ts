import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeeklyDayOffUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.WeeklyDayOffUncheckedCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export default WeeklyDayOffUncheckedCreateWithoutStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeeklyDayOffStaffIdDateCompoundUniqueInputSchema: z.ZodType<Prisma.WeeklyDayOffStaffIdDateCompoundUniqueInput> = z.strictObject({
  staffId: z.number(),
  date: z.coerce.date(),
});

export default WeeklyDayOffStaffIdDateCompoundUniqueInputSchema;

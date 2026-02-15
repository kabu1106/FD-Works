import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HolidayUncheckedCreateInputSchema: z.ZodType<Prisma.HolidayUncheckedCreateInput> = z.strictObject({
  date: z.coerce.date(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default HolidayUncheckedCreateInputSchema;

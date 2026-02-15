import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HolidayCreateInputSchema: z.ZodType<Prisma.HolidayCreateInput> = z.strictObject({
  date: z.coerce.date(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default HolidayCreateInputSchema;

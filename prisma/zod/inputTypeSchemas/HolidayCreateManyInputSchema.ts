import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HolidayCreateManyInputSchema: z.ZodType<Prisma.HolidayCreateManyInput> = z.strictObject({
  date: z.coerce.date(),
  name: z.string(),
  isActive: z.boolean().optional(),
});

export default HolidayCreateManyInputSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export default HolidaySelectSchema;

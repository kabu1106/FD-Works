import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayCreateInputSchema } from '../inputTypeSchemas/HolidayCreateInputSchema'
import { HolidayUncheckedCreateInputSchema } from '../inputTypeSchemas/HolidayUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export const HolidayCreateArgsSchema: z.ZodType<Prisma.HolidayCreateArgs> = z.object({
  select: HolidaySelectSchema.optional(),
  data: z.union([ HolidayCreateInputSchema, HolidayUncheckedCreateInputSchema ]),
}).strict();

export default HolidayCreateArgsSchema;

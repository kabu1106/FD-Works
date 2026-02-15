import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayUpdateInputSchema } from '../inputTypeSchemas/HolidayUpdateInputSchema'
import { HolidayUncheckedUpdateInputSchema } from '../inputTypeSchemas/HolidayUncheckedUpdateInputSchema'
import { HolidayWhereUniqueInputSchema } from '../inputTypeSchemas/HolidayWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export const HolidayUpdateArgsSchema: z.ZodType<Prisma.HolidayUpdateArgs> = z.object({
  select: HolidaySelectSchema.optional(),
  data: z.union([ HolidayUpdateInputSchema, HolidayUncheckedUpdateInputSchema ]),
  where: HolidayWhereUniqueInputSchema, 
}).strict();

export default HolidayUpdateArgsSchema;

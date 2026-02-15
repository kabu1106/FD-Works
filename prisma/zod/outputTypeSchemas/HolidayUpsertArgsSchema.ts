import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereUniqueInputSchema } from '../inputTypeSchemas/HolidayWhereUniqueInputSchema'
import { HolidayCreateInputSchema } from '../inputTypeSchemas/HolidayCreateInputSchema'
import { HolidayUncheckedCreateInputSchema } from '../inputTypeSchemas/HolidayUncheckedCreateInputSchema'
import { HolidayUpdateInputSchema } from '../inputTypeSchemas/HolidayUpdateInputSchema'
import { HolidayUncheckedUpdateInputSchema } from '../inputTypeSchemas/HolidayUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export const HolidayUpsertArgsSchema: z.ZodType<Prisma.HolidayUpsertArgs> = z.object({
  select: HolidaySelectSchema.optional(),
  where: HolidayWhereUniqueInputSchema, 
  create: z.union([ HolidayCreateInputSchema, HolidayUncheckedCreateInputSchema ]),
  update: z.union([ HolidayUpdateInputSchema, HolidayUncheckedUpdateInputSchema ]),
}).strict();

export default HolidayUpsertArgsSchema;

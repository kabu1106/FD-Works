import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereUniqueInputSchema } from '../inputTypeSchemas/HolidayWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export const HolidayFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HolidayFindUniqueOrThrowArgs> = z.object({
  select: HolidaySelectSchema.optional(),
  where: HolidayWhereUniqueInputSchema, 
}).strict();

export default HolidayFindUniqueOrThrowArgsSchema;

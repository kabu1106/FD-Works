import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffIncludeSchema } from '../inputTypeSchemas/WeeklyDayOffIncludeSchema'
import { WeeklyDayOffCreateInputSchema } from '../inputTypeSchemas/WeeklyDayOffCreateInputSchema'
import { WeeklyDayOffUncheckedCreateInputSchema } from '../inputTypeSchemas/WeeklyDayOffUncheckedCreateInputSchema'
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeeklyDayOffSelectSchema: z.ZodType<Prisma.WeeklyDayOffSelect> = z.object({
  id: z.boolean().optional(),
  staffId: z.boolean().optional(),
  date: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const WeeklyDayOffCreateArgsSchema: z.ZodType<Prisma.WeeklyDayOffCreateArgs> = z.object({
  select: WeeklyDayOffSelectSchema.optional(),
  include: z.lazy(() => WeeklyDayOffIncludeSchema).optional(),
  data: z.union([ WeeklyDayOffCreateInputSchema, WeeklyDayOffUncheckedCreateInputSchema ]),
}).strict();

export default WeeklyDayOffCreateArgsSchema;

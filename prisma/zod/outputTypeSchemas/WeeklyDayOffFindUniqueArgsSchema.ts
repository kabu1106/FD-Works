import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffIncludeSchema } from '../inputTypeSchemas/WeeklyDayOffIncludeSchema'
import { WeeklyDayOffWhereUniqueInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereUniqueInputSchema'
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

export const WeeklyDayOffFindUniqueArgsSchema: z.ZodType<Prisma.WeeklyDayOffFindUniqueArgs> = z.object({
  select: WeeklyDayOffSelectSchema.optional(),
  include: z.lazy(() => WeeklyDayOffIncludeSchema).optional(),
  where: WeeklyDayOffWhereUniqueInputSchema, 
}).strict();

export default WeeklyDayOffFindUniqueArgsSchema;

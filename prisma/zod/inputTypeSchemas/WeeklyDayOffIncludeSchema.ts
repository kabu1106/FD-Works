import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

export const WeeklyDayOffIncludeSchema: z.ZodType<Prisma.WeeklyDayOffInclude> = z.object({
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict();

export default WeeklyDayOffIncludeSchema;

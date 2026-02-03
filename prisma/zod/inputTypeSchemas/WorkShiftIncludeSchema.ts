import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamFindManyArgsSchema } from "../outputTypeSchemas/TeamFindManyArgsSchema"
import { WorkShiftDayFindManyArgsSchema } from "../outputTypeSchemas/WorkShiftDayFindManyArgsSchema"
import { WorkShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkShiftCountOutputTypeArgsSchema"

export const WorkShiftIncludeSchema: z.ZodType<Prisma.WorkShiftInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  workShiftDays: z.union([z.boolean(),z.lazy(() => WorkShiftDayFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkShiftCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default WorkShiftIncludeSchema;

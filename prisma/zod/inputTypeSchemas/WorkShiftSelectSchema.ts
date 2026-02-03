import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamFindManyArgsSchema } from "../outputTypeSchemas/TeamFindManyArgsSchema"
import { WorkShiftDayFindManyArgsSchema } from "../outputTypeSchemas/WorkShiftDayFindManyArgsSchema"
import { WorkShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkShiftCountOutputTypeArgsSchema"

export const WorkShiftSelectSchema: z.ZodType<Prisma.WorkShiftSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  shiftType: z.boolean().optional(),
  isActive: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  workShiftDays: z.union([z.boolean(),z.lazy(() => WorkShiftDayFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkShiftCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WorkShiftSelectSchema;

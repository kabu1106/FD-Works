import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftIncludeSchema } from '../inputTypeSchemas/WorkShiftIncludeSchema'
import { WorkShiftUpdateInputSchema } from '../inputTypeSchemas/WorkShiftUpdateInputSchema'
import { WorkShiftUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkShiftUncheckedUpdateInputSchema'
import { WorkShiftWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftWhereUniqueInputSchema'
import { TeamFindManyArgsSchema } from "../outputTypeSchemas/TeamFindManyArgsSchema"
import { WorkShiftDayFindManyArgsSchema } from "../outputTypeSchemas/WorkShiftDayFindManyArgsSchema"
import { WorkShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkShiftCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const WorkShiftUpdateArgsSchema: z.ZodType<Prisma.WorkShiftUpdateArgs> = z.object({
  select: WorkShiftSelectSchema.optional(),
  include: z.lazy(() => WorkShiftIncludeSchema).optional(),
  data: z.union([ WorkShiftUpdateInputSchema, WorkShiftUncheckedUpdateInputSchema ]),
  where: WorkShiftWhereUniqueInputSchema, 
}).strict();

export default WorkShiftUpdateArgsSchema;

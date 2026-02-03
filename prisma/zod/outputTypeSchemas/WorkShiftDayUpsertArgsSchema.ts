import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayIncludeSchema } from '../inputTypeSchemas/WorkShiftDayIncludeSchema'
import { WorkShiftDayWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereUniqueInputSchema'
import { WorkShiftDayCreateInputSchema } from '../inputTypeSchemas/WorkShiftDayCreateInputSchema'
import { WorkShiftDayUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkShiftDayUncheckedCreateInputSchema'
import { WorkShiftDayUpdateInputSchema } from '../inputTypeSchemas/WorkShiftDayUpdateInputSchema'
import { WorkShiftDayUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkShiftDayUncheckedUpdateInputSchema'
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkShiftDaySelectSchema: z.ZodType<Prisma.WorkShiftDaySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  workShiftId: z.boolean().optional(),
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
}).strict()

export const WorkShiftDayUpsertArgsSchema: z.ZodType<Prisma.WorkShiftDayUpsertArgs> = z.object({
  select: WorkShiftDaySelectSchema.optional(),
  include: z.lazy(() => WorkShiftDayIncludeSchema).optional(),
  where: WorkShiftDayWhereUniqueInputSchema, 
  create: z.union([ WorkShiftDayCreateInputSchema, WorkShiftDayUncheckedCreateInputSchema ]),
  update: z.union([ WorkShiftDayUpdateInputSchema, WorkShiftDayUncheckedUpdateInputSchema ]),
}).strict();

export default WorkShiftDayUpsertArgsSchema;

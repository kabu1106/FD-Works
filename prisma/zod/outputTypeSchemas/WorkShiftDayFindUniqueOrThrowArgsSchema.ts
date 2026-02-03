import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayIncludeSchema } from '../inputTypeSchemas/WorkShiftDayIncludeSchema'
import { WorkShiftDayWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereUniqueInputSchema'
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

export const WorkShiftDayFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WorkShiftDayFindUniqueOrThrowArgs> = z.object({
  select: WorkShiftDaySelectSchema.optional(),
  include: z.lazy(() => WorkShiftDayIncludeSchema).optional(),
  where: WorkShiftDayWhereUniqueInputSchema, 
}).strict();

export default WorkShiftDayFindUniqueOrThrowArgsSchema;

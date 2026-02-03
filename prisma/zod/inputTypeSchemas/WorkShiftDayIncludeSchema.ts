import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"

export const WorkShiftDayIncludeSchema: z.ZodType<Prisma.WorkShiftDayInclude> = z.object({
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
}).strict();

export default WorkShiftDayIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"

export const OvertimeSlotIncludeSchema: z.ZodType<Prisma.OvertimeSlotInclude> = z.object({
  overtimeRateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
}).strict();

export default OvertimeSlotIncludeSchema;

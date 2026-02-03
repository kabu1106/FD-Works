import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"

export const OvertimeSlotSelectSchema: z.ZodType<Prisma.OvertimeSlotSelect> = z.object({
  id: z.boolean().optional(),
  workGroupId: z.boolean().optional(),
  startMinute: z.boolean().optional(),
  endMinute: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  overtimeRateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
}).strict()

export default OvertimeSlotSelectSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSlotFindManyArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeRateCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryCountOutputTypeArgsSchema"

export const OvertimeRateCategoryIncludeSchema: z.ZodType<Prisma.OvertimeRateCategoryInclude> = z.object({
  overtimeSlots: z.union([z.boolean(),z.lazy(() => OvertimeSlotFindManyArgsSchema)]).optional(),
  OvertimeSummaryDetail: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default OvertimeRateCategoryIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryArgsSchema } from "../outputTypeSchemas/OvertimeSummaryArgsSchema"
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"

export const OvertimeSummaryDetailIncludeSchema: z.ZodType<Prisma.OvertimeSummaryDetailInclude> = z.object({
  overtimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryArgsSchema)]).optional(),
  rateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
}).strict();

export default OvertimeSummaryDetailIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryDetailIncludeSchema'
import { OvertimeSummaryDetailWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereUniqueInputSchema'
import { OvertimeSummaryArgsSchema } from "../outputTypeSchemas/OvertimeSummaryArgsSchema"
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSummaryDetailSelectSchema: z.ZodType<Prisma.OvertimeSummaryDetailSelect> = z.object({
  id: z.boolean().optional(),
  overtimeSummaryId: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  rateSnapshot: z.boolean().optional(),
  minutes: z.boolean().optional(),
  overtimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryArgsSchema)]).optional(),
  rateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
}).strict()

export const OvertimeSummaryDetailDeleteArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailDeleteArgs> = z.object({
  select: OvertimeSummaryDetailSelectSchema.optional(),
  include: z.lazy(() => OvertimeSummaryDetailIncludeSchema).optional(),
  where: OvertimeSummaryDetailWhereUniqueInputSchema, 
}).strict();

export default OvertimeSummaryDetailDeleteArgsSchema;

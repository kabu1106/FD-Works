import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryDetailIncludeSchema'
import { OvertimeSummaryDetailUpdateInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailUpdateInputSchema'
import { OvertimeSummaryDetailUncheckedUpdateInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailUncheckedUpdateInputSchema'
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

export const OvertimeSummaryDetailUpdateArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailUpdateArgs> = z.object({
  select: OvertimeSummaryDetailSelectSchema.optional(),
  include: z.lazy(() => OvertimeSummaryDetailIncludeSchema).optional(),
  data: z.union([ OvertimeSummaryDetailUpdateInputSchema, OvertimeSummaryDetailUncheckedUpdateInputSchema ]),
  where: OvertimeSummaryDetailWhereUniqueInputSchema, 
}).strict();

export default OvertimeSummaryDetailUpdateArgsSchema;

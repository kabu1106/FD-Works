import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME SUMMARY DETAIL SCHEMA
/////////////////////////////////////////

export const OvertimeSummaryDetailSchema = z.object({
  id: z.string(),
  overtimeSummaryId: z.string(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  minutes: z.number().int(),
})

export type OvertimeSummaryDetail = z.infer<typeof OvertimeSummaryDetailSchema>

export default OvertimeSummaryDetailSchema;

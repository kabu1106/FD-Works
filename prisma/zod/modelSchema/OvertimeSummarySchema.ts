import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME SUMMARY SCHEMA
/////////////////////////////////////////

export const OvertimeSummarySchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  calculationVersion: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean(),
  calculatedAt: z.coerce.date(),
})

export type OvertimeSummary = z.infer<typeof OvertimeSummarySchema>

export default OvertimeSummarySchema;

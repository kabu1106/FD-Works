import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME SUMMARY SCHEMA
/////////////////////////////////////////

export const OvertimeSummarySchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  /**
   * Duty内での世代
   */
  version: z.number().int(),
  totalMinutes: z.number().int(),
  isFinalized: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type OvertimeSummary = z.infer<typeof OvertimeSummarySchema>

export default OvertimeSummarySchema;

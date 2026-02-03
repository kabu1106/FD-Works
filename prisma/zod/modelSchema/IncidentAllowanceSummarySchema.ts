import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT ALLOWANCE SUMMARY SCHEMA
/////////////////////////////////////////

export const IncidentAllowanceSummarySchema = z.object({
  id: z.string(),
  incidentStaffId: z.string(),
  allowanceTypeId: z.number().int(),
  version: z.number().int(),
  count: z.number().int(),
  isFinalized: z.boolean(),
})

export type IncidentAllowanceSummary = z.infer<typeof IncidentAllowanceSummarySchema>

export default IncidentAllowanceSummarySchema;

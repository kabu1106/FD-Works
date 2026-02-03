import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT STAFF ALLOWANCE SCHEMA
/////////////////////////////////////////

export const IncidentStaffAllowanceSchema = z.object({
  id: z.string(),
  incidentStaffId: z.string(),
  allowanceTypeId: z.number().int(),
})

export type IncidentStaffAllowance = z.infer<typeof IncidentStaffAllowanceSchema>

export default IncidentStaffAllowanceSchema;

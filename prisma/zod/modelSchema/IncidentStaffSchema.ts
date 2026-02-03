import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT STAFF SCHEMA
/////////////////////////////////////////

export const IncidentStaffSchema = z.object({
  id: z.string(),
  incidentVehicleId: z.string(),
  staffId: z.number().int(),
})

export type IncidentStaff = z.infer<typeof IncidentStaffSchema>

export default IncidentStaffSchema;

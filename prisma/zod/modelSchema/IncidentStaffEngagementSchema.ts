import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT STAFF ENGAGEMENT SCHEMA
/////////////////////////////////////////

export const IncidentStaffEngagementSchema = z.object({
  id: z.string(),
  incidentId: z.string(),
  staffId: z.number().int(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type IncidentStaffEngagement = z.infer<typeof IncidentStaffEngagementSchema>

export default IncidentStaffEngagementSchema;

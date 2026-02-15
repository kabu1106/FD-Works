import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT READ MODEL SCHEMA
/////////////////////////////////////////

export const IncidentReadModelSchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  locationId: z.number().int(),
  status: z.string(),
  occurredAt: z.coerce.date(),
  closedAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date(),
})

export type IncidentReadModel = z.infer<typeof IncidentReadModelSchema>

export default IncidentReadModelSchema;

import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT SCHEMA
/////////////////////////////////////////

export const IncidentSchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  categoryId: z.number().int(),
  typeId: z.number().int(),
  locationId: z.number().int(),
  destinationId: z.number().int().nullable(),
  destinationName: z.string().nullable(),
  isDeleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Incident = z.infer<typeof IncidentSchema>

export default IncidentSchema;

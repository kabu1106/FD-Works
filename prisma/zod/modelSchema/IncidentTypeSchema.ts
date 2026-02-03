import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT TYPE SCHEMA
/////////////////////////////////////////

export const IncidentTypeSchema = z.object({
  id: z.number().int(),
  categoryId: z.number().int(),
  code: z.string(),
  name: z.string(),
  sortOrder: z.number().int(),
  isActive: z.boolean(),
})

export type IncidentType = z.infer<typeof IncidentTypeSchema>

export default IncidentTypeSchema;

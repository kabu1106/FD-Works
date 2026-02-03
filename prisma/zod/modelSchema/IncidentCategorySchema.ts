import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT CATEGORY SCHEMA
/////////////////////////////////////////

export const IncidentCategorySchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  sortOrder: z.number().int(),
  isActive: z.boolean(),
})

export type IncidentCategory = z.infer<typeof IncidentCategorySchema>

export default IncidentCategorySchema;

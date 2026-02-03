import { z } from 'zod';

/////////////////////////////////////////
// ALLOWANCE GROUP SCHEMA
/////////////////////////////////////////

export const AllowanceGroupSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean(),
})

export type AllowanceGroup = z.infer<typeof AllowanceGroupSchema>

export default AllowanceGroupSchema;

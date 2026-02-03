import { z } from 'zod';

/////////////////////////////////////////
// ALLOWANCE TYPE SCHEMA
/////////////////////////////////////////

export const AllowanceTypeSchema = z.object({
  id: z.number().int(),
  allowanceGroupId: z.number().int(),
  code: z.string(),
  name: z.string(),
  isActive: z.boolean(),
})

export type AllowanceType = z.infer<typeof AllowanceTypeSchema>

export default AllowanceTypeSchema;

import { z } from 'zod';

/////////////////////////////////////////
// STAFF SCHEMA
/////////////////////////////////////////

export const StaffSchema = z.object({
  id: z.number().int(),
  staffNo: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  photoKey: z.string().nullable(),
  teamId: z.number().int(),
})

export type Staff = z.infer<typeof StaffSchema>

export default StaffSchema;

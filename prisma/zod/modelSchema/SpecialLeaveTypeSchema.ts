import { z } from 'zod';

/////////////////////////////////////////
// SPECIAL LEAVE TYPE SCHEMA
/////////////////////////////////////////

export const SpecialLeaveTypeSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  specialLeaveGroupId: z.string(),
  isActive: z.boolean(),
})

export type SpecialLeaveType = z.infer<typeof SpecialLeaveTypeSchema>

export default SpecialLeaveTypeSchema;

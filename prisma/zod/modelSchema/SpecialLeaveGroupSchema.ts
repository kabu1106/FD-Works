import { z } from 'zod';

/////////////////////////////////////////
// SPECIAL LEAVE GROUP SCHEMA
/////////////////////////////////////////

export const SpecialLeaveGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  isActive: z.boolean(),
  sortOrder: z.number().int(),
})

export type SpecialLeaveGroup = z.infer<typeof SpecialLeaveGroupSchema>

export default SpecialLeaveGroupSchema;

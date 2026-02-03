import { z } from 'zod';

/////////////////////////////////////////
// WORK GROUP ASSIGNMENT SCHEMA
/////////////////////////////////////////

export const WorkGroupAssignmentSchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  workGroupId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WorkGroupAssignment = z.infer<typeof WorkGroupAssignmentSchema>

export default WorkGroupAssignmentSchema;

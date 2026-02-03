import { z } from 'zod';

/////////////////////////////////////////
// SPECIAL LEAVE ASSIGNMENT SCHEMA
/////////////////////////////////////////

export const SpecialLeaveAssignmentSchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  specialLeaveTypeId: z.string(),
  baseDate: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SpecialLeaveAssignment = z.infer<typeof SpecialLeaveAssignmentSchema>

export default SpecialLeaveAssignmentSchema;

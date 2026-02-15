import { z } from 'zod';
import { AttendanceEventTypeSchema } from '../inputTypeSchemas/AttendanceEventTypeSchema'

/////////////////////////////////////////
// ATTENDANCE SCHEMA
/////////////////////////////////////////

export const AttendanceSchema = z.object({
  type: AttendanceEventTypeSchema,
  id: z.string(),
  dutyId: z.string(),
  departmentId: z.number().int(),
  staffId: z.number().int(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Attendance = z.infer<typeof AttendanceSchema>

export default AttendanceSchema;

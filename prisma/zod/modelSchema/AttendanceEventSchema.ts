import { z } from 'zod';
import { AttendanceEventTypeSchema } from '../inputTypeSchemas/AttendanceEventTypeSchema'

/////////////////////////////////////////
// ATTENDANCE EVENT SCHEMA
/////////////////////////////////////////

export const AttendanceEventSchema = z.object({
  type: AttendanceEventTypeSchema,
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  occurredAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type AttendanceEvent = z.infer<typeof AttendanceEventSchema>

export default AttendanceEventSchema;

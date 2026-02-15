import { z } from 'zod';
import { DayTypeSchema } from '../inputTypeSchemas/DayTypeSchema'

/////////////////////////////////////////
// DUTY DAY TYPE SCHEMA
/////////////////////////////////////////

export const DutyDayTypeSchema = z.object({
  dayType: DayTypeSchema,
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  reason: z.string(),
  decidedAt: z.coerce.date(),
  decidedBy: z.string().nullable(),
})

export type DutyDayType = z.infer<typeof DutyDayTypeSchema>

export default DutyDayTypeSchema;

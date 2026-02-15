import { z } from 'zod';

/////////////////////////////////////////
// WEEKLY DAY OFF SCHEMA
/////////////////////////////////////////

export const WeeklyDayOffSchema = z.object({
  id: z.string(),
  staffId: z.number().int(),
  date: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type WeeklyDayOff = z.infer<typeof WeeklyDayOffSchema>

export default WeeklyDayOffSchema;

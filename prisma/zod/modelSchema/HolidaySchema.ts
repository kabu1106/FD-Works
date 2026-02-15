import { z } from 'zod';

/////////////////////////////////////////
// HOLIDAY SCHEMA
/////////////////////////////////////////

export const HolidaySchema = z.object({
  date: z.coerce.date(),
  name: z.string(),
  isActive: z.boolean(),
})

export type Holiday = z.infer<typeof HolidaySchema>

export default HolidaySchema;

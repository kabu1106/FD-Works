import { z } from 'zod';

/////////////////////////////////////////
// SUBSTITUTE HOLIDAY SCHEMA
/////////////////////////////////////////

export const SubstituteHolidaySchema = z.object({
  id: z.string(),
  staffId: z.number().int(),
  originalHoliday: z.coerce.date(),
  substituteDate: z.coerce.date(),
  reason: z.string(),
  decidedAt: z.coerce.date(),
  decidedBy: z.string().nullable(),
})

export type SubstituteHoliday = z.infer<typeof SubstituteHolidaySchema>

export default SubstituteHolidaySchema;

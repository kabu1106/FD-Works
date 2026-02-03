import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME SLOT SCHEMA
/////////////////////////////////////////

export const OvertimeSlotSchema = z.object({
  id: z.number().int(),
  workGroupId: z.number().int(),
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  overtimeRateCategoryId: z.number().int().nullable(),
})

export type OvertimeSlot = z.infer<typeof OvertimeSlotSchema>

export default OvertimeSlotSchema;

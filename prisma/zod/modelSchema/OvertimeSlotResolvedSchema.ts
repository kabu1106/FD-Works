import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME SLOT RESOLVED SCHEMA
/////////////////////////////////////////

export const OvertimeSlotResolvedSchema = z.object({
  id: z.string(),
  dutyId: z.string(),
  staffId: z.number().int(),
  startAt: z.coerce.date(),
  endAt: z.coerce.date(),
  minutes: z.number().int(),
  overtimeRateCategoryId: z.number().int(),
  rateSnapshot: z.number(),
  createdAt: z.coerce.date(),
})

export type OvertimeSlotResolved = z.infer<typeof OvertimeSlotResolvedSchema>

export default OvertimeSlotResolvedSchema;

import { z } from 'zod';

/////////////////////////////////////////
// OVERTIME RATE CATEGORY SCHEMA
/////////////////////////////////////////

export const OvertimeRateCategorySchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  rate: z.number(),
  color: z.string().nullable(),
  isActive: z.boolean(),
})

export type OvertimeRateCategory = z.infer<typeof OvertimeRateCategorySchema>

export default OvertimeRateCategorySchema;

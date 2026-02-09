import z from "zod";
import { DateSchema } from "../shared";

export const WeeklyDayOffChangedSchema = z.object({
  eventType: z.literal("WeeklyDayOffChanged"),
  payload: z.object({
    staffId: z.number().int(),
    oldDate: DateSchema,
    newDate: DateSchema,
    reason: z.string(),
  }),
})
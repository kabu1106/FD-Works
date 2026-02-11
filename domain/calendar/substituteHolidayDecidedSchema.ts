import z from "zod";
import { DateSchema } from "../shared/domainEventrt";

export const SubstituteHolidayDecidedSchema = z.object({
  eventType: z.literal("SubstituteHolidayDecided"),
  payload: z.object({
    staffId: z.number().int(),
    originalHoliday: DateSchema,
    substituteDate: DateSchema,
    reason: z.enum([
      "WEEKLY_DAY_OFF_OVERLAPPED",
      "DISASTER_RESPONSE",
      "MANUAL",
    ]),
  }),
})
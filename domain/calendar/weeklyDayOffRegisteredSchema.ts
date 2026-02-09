import z from "zod";
import { DateSchema } from "../shared";

export const WeeklyDayOffRegisteredSchema = z.object({
  eventType: z.literal("WeeklyDayOffRegistered"),
  payload: z.object({
    staffId: z.number().int(),
    date: DateSchema,
  }),
})
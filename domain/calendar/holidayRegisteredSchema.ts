import z from "zod";
import { DateSchema } from "../shared";

export const HolidayRegisteredSchema = z.object({
  eventType: z.literal("HolidayRegistered"),
  payload: z.object({
    date: DateSchema,
    name: z.string(),
  }),
})


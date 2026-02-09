import z from "zod";
import { DateTimeSchema } from "../shared";

export const BreakEndedSchema = z.object({
  eventType: z.literal("BreakEnded"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
})

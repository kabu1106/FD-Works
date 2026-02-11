import z from "zod";
import { DateTimeSchema } from "../shared/dateschema";

export const BreakStartedSchema = z.object({
  eventType: z.literal("BreakStarted"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
})
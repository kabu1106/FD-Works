import z from "zod";
import { DateTimeSchema } from "../shared/dateschema";

export const WorkEndedSchema = z.object({
  eventType: z.literal("WorkEnded"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
})
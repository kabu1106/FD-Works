import z from "zod"
import { DateTimeSchema } from "../shared/dateschema"

export const WorkStartedSchema = z.object({
  eventType: z.literal("WorkStarted"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    at: DateTimeSchema,
  }),
})

import z from "zod"
import { DateTimeSchema } from "../shared"

export const IncidentOccurredSchema = z.object({
  eventType: z.literal("IncidentOccurred"),
  payload: z.object({
    incidentId: z.string().uuid(),
    dutyId: z.string().uuid(),
    occurredAt: DateTimeSchema,
  }),
})

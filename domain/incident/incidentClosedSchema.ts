import z from "zod";
import { DateTimeSchema } from "../shared";

export const IncidentClosedSchema = z.object({
  eventType: z.literal("IncidentClosed"),
  payload: z.object({
    incidentId: z.string().uuid(),
    closedAt: DateTimeSchema,
  }),
})
import z from "zod";

export const IncidentAllowanceFinalizedSchema = z.object({
  eventType: z.literal("IncidentAllowanceFinalized"),
  payload: z.object({
    incidentId: z.string().uuid(),
    staffId: z.number().int(),
  }),
})
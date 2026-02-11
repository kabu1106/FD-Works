import z from "zod";

export const IncidentAllowanceCalculatedSchema = z.object({
  eventType: z.literal("IncidentAllowanceCalculated"),
  payload: z.object({
    incidentId: z.string().uuid(),
    staffId: z.number().int(),
    allowanceTypeId: z.number().int(),
    count: z.number().int().min(1),
  }),
})
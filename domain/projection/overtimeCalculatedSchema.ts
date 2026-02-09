import z from "zod";

export const OvertimeCalculatedSchema = z.object({
  eventType: z.literal("OvertimeCalculated"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    totalMinutes: z.number().int().min(0),
  }),
})
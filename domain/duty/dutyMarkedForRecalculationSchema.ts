import z from "zod";

  export const DutyMarkedForRecalculationSchema = z.object({
    eventType: z.literal("DutyMarkedForRecalculation"),
    payload: z.object({
      dutyId: z.string().uuid(),
      reason: z.string(),
    }),
  })
import z from "zod";

  export const DutyLockedSchema = z.object({
    eventType: z.literal("DutyLocked"),
    payload: z.object({
      dutyId: z.string().uuid(),
    }),
  })
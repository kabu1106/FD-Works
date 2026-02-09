import z from "zod";

  export const DutyApprovedSchema = z.object({
    eventType: z.literal("DutyApproved"),
    payload: z.object({
      dutyId: z.string().uuid(),
      approvedBy: z.string(),
    }),
  })
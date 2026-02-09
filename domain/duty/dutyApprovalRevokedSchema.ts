import z from "zod";

  export const DutyApprovalRevokedSchema = z.object({
    eventType: z.literal("DutyApprovalRevoked"),
    payload: z.object({
      dutyId: z.string().uuid(),
      reason: z.string(),
    }),
  })
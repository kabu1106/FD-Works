import z from "zod";

 
  export const StaffUnassignedFromDutySchema = z.object({
    eventType: z.literal("StaffUnassignedFromDuty"),
    payload: z.object({
      dutyId: z.string().uuid(),
      staffId: z.number().int(),
      reason: z.string(),
    }),
  })
  
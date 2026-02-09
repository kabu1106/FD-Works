import z from "zod";

  export const StaffAssignedToDutySchema = z.object({
    eventType: z.literal("StaffAssignedToDuty"),
    payload: z.object({
      dutyId: z.string().uuid(),
      staffId: z.number().int(),
    }),
  })
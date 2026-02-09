import z from "zod";

  export const WorkGroupAssignedToStaffSchema = z.object({
    eventType: z.literal("WorkGroupAssignedToStaff"),
    payload: z.object({
      dutyId: z.string().uuid(),
      staffId: z.number().int(),
      workGroupId: z.number().int(),
    }),
  })
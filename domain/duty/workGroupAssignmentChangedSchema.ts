import z from "zod";

  
  export const WorkGroupAssignmentChangedSchema = z.object({
    eventType: z.literal("WorkGroupAssignmentChanged"),
    payload: z.object({
      dutyId: z.string().uuid(),
      staffId: z.number().int(),
      oldWorkGroupId: z.number().int(),
      newWorkGroupId: z.number().int(),
      reason: z.string(),
    }),
  })
  
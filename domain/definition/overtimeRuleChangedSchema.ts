import z from "zod";

  export const OvertimeRuleChangedSchema = z.object({
    eventType: z.literal("OvertimeRuleChanged"),
    payload: z.object({
      workGroupId: z.number().int(),
      rateCategoryId: z.number().int(),
      oldRate: z.number(),
      newRate: z.number(),
      reason: z.string(),
    }),
  })
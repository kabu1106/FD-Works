import z from "zod";

export const OvertimeRuleDefinedSchema = z.object({
    eventType: z.literal("OvertimeRuleDefined"),
    payload: z.object({
      workGroupId: z.number().int(),
      rateCategoryId: z.number().int(),
      startMinute: z.number().min(0).max(1440),
      endMinute: z.number().min(0).max(1440),
      rate: z.number().positive(),
    }),
  })
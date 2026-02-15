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

  export const SleepTimeDefinedSchema = z.object({
    eventType: z.literal("SleepTimeDefined"),
    payload: z.object({
      workGroupId: z.number().int(),
      startMinute: z.number().min(0).max(1440),
      endMinute: z.number().min(0).max(1440),
    }),
  })
  
  export const SleepTimeDefinitionChangedSchema = z.object({
    eventType: z.literal("SleepTimeDefinitionChanged"),
    payload: z.object({
      workGroupId: z.number().int(),
      oldStartMinute: z.number(),
      oldEndMinute: z.number(),
      newStartMinute: z.number(),
      newEndMinute: z.number(),
      reason: z.string(),
    }),
  })

  export const DefinitionEventSchema  =z.discriminatedUnion("eventType", [
    OvertimeRuleChangedSchema,
    OvertimeRuleDefinedSchema,
    SleepTimeDefinedSchema,
    SleepTimeDefinitionChangedSchema,
  ])

  export type DefinitionEventDTO =
  z.infer<typeof DefinitionEventSchema>;
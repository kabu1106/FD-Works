import z from "zod";

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
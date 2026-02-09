import z from "zod"

export const SleepTimeDefinedSchema = z.object({
    eventType: z.literal("SleepTimeDefined"),
    payload: z.object({
      workGroupId: z.number().int(),
      startMinute: z.number().min(0).max(1440),
      endMinute: z.number().min(0).max(1440),
    }),
  })
  

  
  

  
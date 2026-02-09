import z from "zod"
import { DateSchema } from "../shared"

export const DutyCreatedSchema = z.object({
    eventType: z.literal("DutyCreated"),
    payload: z.object({
      dutyId: z.string().uuid(),
      date: DateSchema,
      teamId: z.number().int(),
    }),
  })
  

  
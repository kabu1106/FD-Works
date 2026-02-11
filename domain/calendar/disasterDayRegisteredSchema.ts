import z from "zod";
import { DateSchema } from "../shared/domainEventrt";

export const DisasterDayRegisteredSchema = z.object({
    eventType: z.literal("DisasterDayRegistered"),
    payload: z.object({
      date: DateSchema,
      reason: z.string(),
    }),
  })
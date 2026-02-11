import z from "zod";
import { DateTimeSchema } from "../../domain/shared/dateschema";

export const OvertimeSlotResolvedSchema = z.object({
  eventType: z.literal("OvertimeSlotResolved"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    start: DateTimeSchema,
    end: DateTimeSchema,
    rateCategoryId: z.number().int(),
  }),
})
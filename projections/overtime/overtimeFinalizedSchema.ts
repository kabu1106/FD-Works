import z from "zod";
import { DateTimeSchema } from "../../domain/shared/dateschema";

export const OvertimeFinalizedSchema = z.object({
  eventType: z.literal("OvertimeFinalized"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    finalizedAt: DateTimeSchema,
  }),
})
import z from "zod";
import { DateTimeSchema } from "../shared";

export const StaffBoardedSchema = z.object({
  eventType: z.literal("StaffBoarded"),
  payload: z.object({
    incidentId: z.string().uuid(),
    vehicleId: z.number().int(),
    staffId: z.number().int(),
    boardedAt: DateTimeSchema,
  }),
})
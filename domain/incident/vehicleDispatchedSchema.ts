import z from "zod";
import { DateTimeSchema } from "../shared";

export const VehicleDispatchedSchema = z.object({
  eventType: z.literal("VehicleDispatched"),
  payload: z.object({
    incidentId: z.string().uuid(),
    vehicleId: z.number().int(),
    dispatchedAt: DateTimeSchema,
  }),
})

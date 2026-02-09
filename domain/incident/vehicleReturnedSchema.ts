import z from "zod";
import { DateTimeSchema } from "../shared";

export const VehicleReturnedSchema = z.object({
  eventType: z.literal("VehicleReturned"),
  payload: z.object({
    incidentId: z.string().uuid(),
    vehicleId: z.number().int(),
    returnedAt: DateTimeSchema,
  }),
})
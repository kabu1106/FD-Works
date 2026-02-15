import { z } from 'zod';

/////////////////////////////////////////
// DISPATCHED VEHICLE SCHEMA
/////////////////////////////////////////

export const DispatchedVehicleSchema = z.object({
  id: z.number().int(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchedAt: z.coerce.date(),
  returnedAt: z.coerce.date().nullable(),
})

export type DispatchedVehicle = z.infer<typeof DispatchedVehicleSchema>

export default DispatchedVehicleSchema;

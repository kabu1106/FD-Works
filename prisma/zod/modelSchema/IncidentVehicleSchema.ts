import { z } from 'zod';

/////////////////////////////////////////
// INCIDENT VEHICLE SCHEMA
/////////////////////////////////////////

export const IncidentVehicleSchema = z.object({
  id: z.string(),
  incidentId: z.string(),
  vehicleId: z.number().int(),
  dispatchTime: z.coerce.date(),
  returnTime: z.coerce.date(),
})

export type IncidentVehicle = z.infer<typeof IncidentVehicleSchema>

export default IncidentVehicleSchema;

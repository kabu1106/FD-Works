import { z } from 'zod';

/////////////////////////////////////////
// STAFF IN VEHICLE SCHEMA
/////////////////////////////////////////

export const StaffInVehicleSchema = z.object({
  id: z.number().int(),
  dispatchedVehicleId: z.number().int(),
  staffId: z.number().int(),
})

export type StaffInVehicle = z.infer<typeof StaffInVehicleSchema>

export default StaffInVehicleSchema;

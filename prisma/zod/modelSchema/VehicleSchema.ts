import { z } from 'zod';

/////////////////////////////////////////
// VEHICLE SCHEMA
/////////////////////////////////////////

export const VehicleSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  departmentId: z.number().int().nullable(),
  isActive: z.boolean(),
})

export type Vehicle = z.infer<typeof VehicleSchema>

export default VehicleSchema;

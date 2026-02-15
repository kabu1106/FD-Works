import { z } from 'zod';

export const DispatchedVehicleScalarFieldEnumSchema = z.enum(['id','incidentId','vehicleId','dispatchedAt','returnedAt']);

export default DispatchedVehicleScalarFieldEnumSchema;

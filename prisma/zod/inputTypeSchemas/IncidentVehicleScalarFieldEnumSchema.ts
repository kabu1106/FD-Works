import { z } from 'zod';

export const IncidentVehicleScalarFieldEnumSchema = z.enum(['id','incidentId','vehicleId','dispatchTime','returnTime']);

export default IncidentVehicleScalarFieldEnumSchema;

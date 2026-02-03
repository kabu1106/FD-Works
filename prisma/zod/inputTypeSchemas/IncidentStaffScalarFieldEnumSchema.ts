import { z } from 'zod';

export const IncidentStaffScalarFieldEnumSchema = z.enum(['id','incidentVehicleId','staffId']);

export default IncidentStaffScalarFieldEnumSchema;

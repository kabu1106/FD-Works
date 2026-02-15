import { z } from 'zod';

export const StaffInVehicleScalarFieldEnumSchema = z.enum(['id','dispatchedVehicleId','staffId']);

export default StaffInVehicleScalarFieldEnumSchema;

import { z } from 'zod';

export const VehicleScalarFieldEnumSchema = z.enum(['id','code','name','departmentId','isActive']);

export default VehicleScalarFieldEnumSchema;
